'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { openCalendly } from '@/lib/calendly'
import '@/css/demo.css'

type DemoState = 'idle' | 'form' | 'mode_select' | 'connecting_browser' | 'browser_call' | 'mic_error' | 'connecting_phone' | 'phone_call' | 'ended' | 'error'

interface LeadData {
  name: string
  phone: string
  email: string
}

interface DemoWidgetProps {
  trade: string
  agentId: string
  phoneNumber: string
  businessName: string
}

declare global {
  interface Window {
    grecaptcha: any
  }
}

export default function DemoWidget({ trade, agentId, phoneNumber, businessName }: DemoWidgetProps) {
  const [state, setState] = useState<DemoState>('idle')
  const [leadData, setLeadData] = useState<LeadData>({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [agentSpeaking, setAgentSpeaking] = useState(false)
  const [transcript, setTranscript] = useState<Array<{ role: string; content: string }>>([])
  const [callDuration, setCallDuration] = useState(0)

  const retellClientRef = useRef<any>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const transcriptEndRef = useRef<HTMLDivElement>(null)

  // Load reCAPTCHA script
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!siteKey) return

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  // Auto-scroll transcript within its container (not the page)
  useEffect(() => {
    const el = transcriptEndRef.current
    if (el?.parentElement) {
      el.parentElement.scrollTop = el.parentElement.scrollHeight
    }
  }, [transcript])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (retellClientRef.current) {
        try { retellClientRef.current.stopCall() } catch {}
      }
    }
  }, [])

  const getRecaptchaToken = async (): Promise<string | null> => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!siteKey || !window.grecaptcha) return null
    try {
      return await window.grecaptcha.execute(siteKey, { action: 'demo_call' })
    } catch {
      return null
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!leadData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }

    const phoneClean = leadData.phone.replace(/[\s\-()]/g, '')
    if (!phoneClean.match(/^(\+44|0)[1-9]\d{8,10}$/)) {
      newErrors.phone = 'Please enter a valid UK phone number'
    }

    if (!leadData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    try {
      const recaptchaToken = await getRecaptchaToken()
      const res = await fetch('/api/create-demo-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          trade,
          mode: 'capture_only',
          recaptchaToken,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        if (data.error === 'rate_limited') {
          setErrorMessage(data.message)
          setState('error')
          return
        }
        throw new Error(data.message || 'Something went wrong')
      }

      setState('mode_select')
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
      setState('error')
    } finally {
      setLoading(false)
    }
  }

  const startBrowserCall = useCallback(async () => {
    setState('connecting_browser')

    try {
      const recaptchaToken = await getRecaptchaToken()
      const res = await fetch('/api/create-demo-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          trade,
          mode: 'web_call',
          recaptchaToken,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.message || 'Failed to start demo')
      }

      const { RetellWebClient } = await import('retell-client-js-sdk')
      const client = new RetellWebClient()
      retellClientRef.current = client

      client.on('call_started', () => {
        setState('browser_call')
        timerRef.current = setInterval(() => {
          setCallDuration((d) => d + 1)
        }, 1000)
      })

      client.on('call_ended', () => {
        if (timerRef.current) clearInterval(timerRef.current)
        setState('ended')
      })

      client.on('agent_start_talking', () => {
        setAgentSpeaking(true)
      })

      client.on('agent_stop_talking', () => {
        setAgentSpeaking(false)
      })

      client.on('update', (update: any) => {
        if (update.transcript) {
          const entries = update.transcript.map((t: any) => ({
            role: t.role,
            content: t.content,
          }))
          setTranscript(entries)
        }
      })

      client.on('error', (error: any) => {
        console.error('Retell error:', error)
        if (timerRef.current) clearInterval(timerRef.current)

        if (error?.message?.toLowerCase().includes('microphone') ||
            error?.message?.toLowerCase().includes('permission') ||
            error?.name === 'NotAllowedError') {
          setState('mic_error')
        } else {
          setErrorMessage('The call encountered an error. Please try again or book a consultation.')
          setState('error')
        }
      })

      await client.startCall({ accessToken: data.access_token })
    } catch (err: any) {
      console.error('Browser call error:', err)

      if (err?.name === 'NotAllowedError' || err?.message?.includes('permission')) {
        setState('mic_error')
      } else {
        setErrorMessage(err.message || 'Demo unavailable right now — book a consultation instead.')
        setState('error')
      }
    }
  }, [leadData, trade])

  const startPhoneCall = useCallback(async () => {
    setState('connecting_phone')

    try {
      const recaptchaToken = await getRecaptchaToken()
      const res = await fetch('/api/create-demo-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          trade,
          mode: 'phone_call',
          recaptchaToken,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.message || 'Failed to start call')
      }

      setState('phone_call')
      timerRef.current = setInterval(() => {
        setCallDuration((d) => d + 1)
      }, 1000)

      setTimeout(() => {
        if (timerRef.current) clearInterval(timerRef.current)
        setState('ended')
      }, 5 * 60 * 1000)
    } catch (err: any) {
      setErrorMessage(err.message || 'Demo unavailable right now — book a consultation instead.')
      setState('error')
    }
  }, [leadData, trade])

  const hangUp = () => {
    if (retellClientRef.current) {
      try { retellClientRef.current.stopCall() } catch {}
    }
    if (timerRef.current) clearInterval(timerRef.current)
    setState('ended')
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="demo-widget">
      {/* IDLE — Try the Demo button */}
      {state === 'idle' && (
        <div className="demo-widget-idle">
          <div className="demo-widget-label">Live Demo</div>
          <h3 className="demo-widget-heading">Hear it in action</h3>
          <p className="demo-widget-sub">
            Talk to <strong>{businessName}</strong>&apos;s AI receptionist — just like a real customer would.
          </p>
          <button className="demo-trigger-btn" onClick={() => setState('form')}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Try the Demo
          </button>
        </div>
      )}

      {/* FORM — Lead capture */}
      {state === 'form' && (
        <form className="demo-form" onSubmit={handleFormSubmit}>
          <h3>Before we connect you</h3>
          <p>Tell us a bit about yourself so we can personalise the demo.</p>

          <div className="demo-form-field">
            <label htmlFor="demo-name">Your Name</label>
            <input
              id="demo-name"
              type="text"
              placeholder="e.g. Sarah Mitchell"
              value={leadData.name}
              onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
              required
            />
            {errors.name && <div className="field-error">{errors.name}</div>}
          </div>

          <div className="demo-form-field">
            <label htmlFor="demo-phone">Phone Number</label>
            <input
              id="demo-phone"
              type="tel"
              placeholder="e.g. 07700 900123"
              value={leadData.phone}
              onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
              required
            />
            {errors.phone && <div className="field-error">{errors.phone}</div>}
          </div>

          <div className="demo-form-field">
            <label htmlFor="demo-email">Email</label>
            <input
              id="demo-email"
              type="email"
              placeholder="e.g. sarah@example.com"
              value={leadData.email}
              onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
              required
            />
            {errors.email && <div className="field-error">{errors.email}</div>}
          </div>

          <button type="submit" className="demo-form-submit" disabled={loading}>
            {loading ? 'Setting up...' : 'Continue'}
          </button>

          <p className="demo-form-privacy">
            We&apos;ll only use this to follow up if you&apos;re interested. No spam.
          </p>
        </form>
      )}

      {/* MODE SELECT */}
      {state === 'mode_select' && (
        <div className="demo-mode-select">
          <h3>How would you like to try it?</h3>

          <div className="demo-mode-grid demo-mode-stacked">
            <button className="demo-mode-card" onClick={startBrowserCall}>
              <svg viewBox="0 0 24 24">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                <path d="M19 10v2a7 7 0 01-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
              <h4>Talk in your browser</h4>
              <p>Uses your microphone and speakers.</p>
            </button>

            <button className="demo-mode-card" onClick={startPhoneCall}>
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <h4>Call my phone</h4>
              <p>We&apos;ll call {leadData.phone} right now.</p>
            </button>
          </div>
        </div>
      )}

      {/* CONNECTING BROWSER */}
      {state === 'connecting_browser' && (
        <div className="demo-call-ui">
          <div className="demo-call-connecting">
            <div className="demo-pulse-ring">
              <svg viewBox="0 0 24 24">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                <path d="M19 10v2a7 7 0 01-14 0v-2"/>
              </svg>
            </div>
            <h3>Setting up your demo...</h3>
            <p>Connecting you to {businessName}&apos;s AI receptionist.</p>
          </div>
        </div>
      )}

      {/* BROWSER CALL ACTIVE */}
      {state === 'browser_call' && (
        <div className="demo-call-ui">
          <div className="demo-call-active">
            <h3>Call with {businessName}</h3>
            <div className={`demo-call-status ${agentSpeaking ? 'speaking' : 'listening'}`}>
              {agentSpeaking ? 'Agent speaking...' : 'Listening...'}
            </div>

            <div className={`demo-audio-viz ${agentSpeaking ? 'speaking' : ''}`}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="demo-audio-bar" />
              ))}
            </div>

            <div style={{ marginBottom: 16, fontSize: 14, color: 'rgba(245,240,232,0.4)' }}>
              {formatTime(callDuration)}
            </div>

            <button className="demo-hangup-btn" onClick={hangUp}>
              Hang Up
            </button>

            {transcript.length > 0 && (
              <div className="demo-transcript">
                {transcript.map((t, i) => (
                  <p key={i} className={t.role === 'agent' ? 'transcript-agent' : 'transcript-user'}>
                    <strong>{t.role === 'agent' ? 'Agent' : 'You'}:</strong> {t.content}
                  </p>
                ))}
                <div ref={transcriptEndRef} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* MIC ERROR */}
      {state === 'mic_error' && (
        <div className="demo-mic-error">
          <h3>Microphone access needed</h3>
          <p>Your browser blocked microphone access. Allow permissions and reload, or try the phone option.</p>
          <button className="demo-mic-fallback-btn" onClick={startPhoneCall}>
            Call {leadData.phone} instead
          </button>
        </div>
      )}

      {/* CONNECTING PHONE */}
      {state === 'connecting_phone' && (
        <div className="demo-phone-ui">
          <div className="demo-pulse-ring">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
          <h3>Calling {leadData.phone} now...</h3>
          <p>Your phone should ring in a few seconds.</p>
        </div>
      )}

      {/* PHONE CALL ACTIVE */}
      {state === 'phone_call' && (
        <div className="demo-phone-ui">
          <div className="demo-pulse-ring">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
          <h3>Call in progress</h3>
          <div className="demo-phone-timer">{formatTime(callDuration)}</div>
          <p>Chat with the {businessName} AI receptionist on your phone.</p>
          <button className="demo-hangup-btn" onClick={hangUp} style={{ marginTop: 24 }}>
            I&apos;m Done
          </button>
        </div>
      )}

      {/* ERROR */}
      {state === 'error' && (
        <div className="demo-error">
          <h3>Something went wrong</h3>
          <p>{errorMessage}</p>
          <a href="#" className="btn-gold" onClick={openCalendly}>
            Book a Free Consultation
          </a>
        </div>
      )}

      {/* ENDED — CTA */}
      {state === 'ended' && (
        <div className="demo-end-cta">
          <h3>Want this for your business?</h3>
          <p>
            That was just a demo — imagine that on every missed call, 24/7.
          </p>
          <a href="#" className="btn-gold" onClick={openCalendly}>
            Book a Free Consultation
          </a>
        </div>
      )}
    </div>
  )
}
