import { NextRequest, NextResponse } from 'next/server'
import { demoAgents } from '@/lib/demo-config'

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 }) // 1 hour
    return true
  }

  if (entry.count >= 10) return false
  entry.count++
  return true
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) {
    console.warn('RECAPTCHA_SECRET_KEY not set, skipping verification')
    return true
  }

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    })
    const data = await res.json()
    return data.success && data.score >= 0.5
  } catch (err) {
    console.error('reCAPTCHA verification failed:', err)
    return false
  }
}

async function fireLeadWebhook(payload: Record<string, unknown>) {
  const webhookUrl = process.env.N8N_DEMO_LEAD_WEBHOOK
  if (!webhookUrl) {
    console.warn('N8N_DEMO_LEAD_WEBHOOK not set, skipping webhook')
    return
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    console.error('Failed to fire lead webhook:', err)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { trade, name, phone, email, mode, recaptchaToken } = body

    // Validate required fields
    if (!trade || !name || !phone || !email || !mode) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Validate trade
    const agent = demoAgents[trade]
    if (!agent) {
      return NextResponse.json({ error: 'Invalid trade' }, { status: 400 })
    }

    // Rate limit check
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json({
        error: 'rate_limited',
        message: 'You\'ve reached the demo limit. Book a free consultation for a live walkthrough.',
        calendlyUrl: 'https://calendly.com/ringcatch',
      }, { status: 429 })
    }

    // reCAPTCHA verification
    if (recaptchaToken) {
      const isValid = await verifyRecaptcha(recaptchaToken)
      if (!isValid) {
        return NextResponse.json({
          error: 'recaptcha_failed',
          message: 'Verification failed. Please try again or book a consultation instead.',
        }, { status: 403 })
      }
    }

    // Handle modes
    if (mode === 'capture_only') {
      // Fire lead data to n8n (fire-and-forget)
      fireLeadWebhook({
        name,
        phone,
        email,
        trade,
        source: 'web-demo',
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({ success: true })
    }

    if (mode === 'web_call') {
      const retellApiKey = process.env.RETELL_API_KEY
      if (!retellApiKey) {
        return NextResponse.json({
          error: 'config_error',
          message: 'Demo is being set up. Book a consultation for a live walkthrough.',
        }, { status: 503 })
      }

      try {
        const res = await fetch('https://api.retellai.com/v2/create-web-call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${retellApiKey}`,
          },
          body: JSON.stringify({
            agent_id: agent.agentId,
            metadata: {
              visitor_name: name,
              visitor_email: email,
              visitor_phone: phone,
              trade,
            },
            retell_llm_dynamic_variables: {
              visitor_name: name.split(' ')[0],
            },
          }),
        })

        const responseText = await res.text()
        if (!res.ok) {
          console.error('Retell web call API error:', res.status, responseText)
          return NextResponse.json({
            error: 'demo_unavailable',
            message: 'Demo unavailable right now — book a consultation instead and we\'ll give you a live walkthrough.',
            retell_error: responseText,
            retell_status: res.status,
          }, { status: 503 })
        }

        const data = JSON.parse(responseText)
        return NextResponse.json({ access_token: data.access_token })
      } catch (err) {
        console.error('Failed to create web call:', err)
        return NextResponse.json({
          error: 'demo_unavailable',
          message: 'Demo unavailable right now — book a consultation instead and we\'ll give you a live walkthrough.',
        }, { status: 503 })
      }
    }

    if (mode === 'phone_call') {
      const retellApiKey = process.env.RETELL_API_KEY
      if (!retellApiKey) {
        return NextResponse.json({
          error: 'config_error',
          message: 'Demo is being set up. Book a consultation for a live walkthrough.',
        }, { status: 503 })
      }

      try {
        const res = await fetch('https://api.retellai.com/v2/create-phone-call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${retellApiKey}`,
          },
          body: JSON.stringify({
            from_number: agent.phoneNumber,
            to_number: phone,
            override_agent_id: agent.agentId,
            metadata: {
              visitor_name: name,
              visitor_email: email,
              trade,
            },
            retell_llm_dynamic_variables: {
              visitor_name: name.split(' ')[0],
            },
          }),
        })

        if (!res.ok) {
          const errorData = await res.text()
          console.error('Retell phone call API error:', res.status, errorData)
          throw new Error(`Retell API returned ${res.status}`)
        }

        const data = await res.json()
        return NextResponse.json({ call_id: data.call_id, status: 'calling' })
      } catch (err) {
        console.error('Failed to create phone call:', err)
        return NextResponse.json({
          error: 'demo_unavailable',
          message: 'Demo unavailable right now — book a consultation instead and we\'ll give you a live walkthrough.',
        }, { status: 503 })
      }
    }

    return NextResponse.json({ error: 'Invalid mode' }, { status: 400 })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
