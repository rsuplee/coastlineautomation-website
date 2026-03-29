import { NextResponse } from 'next/server'

export async function POST() {
  const retellApiKey = process.env.RETELL_API_KEY?.trim()
  // Temp debug: log key length and first/last 4 chars
  console.log('RETELL_API_KEY debug:', retellApiKey ? `len=${retellApiKey.length}, starts="${retellApiKey.slice(0,4)}", ends="${retellApiKey.slice(-4)}"` : 'NOT SET')
  if (!retellApiKey) {
    return NextResponse.json(
      { error: 'Service not configured' },
      { status: 503 }
    )
  }

  try {
    const res = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${retellApiKey}`,
      },
      body: JSON.stringify({
        agent_id: 'agent_9f7a59fab0e7eccc48a25ce1eb',
      }),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Retell API error:', res.status, errorText)
      return NextResponse.json(
        { error: 'Failed to create call', retell_status: res.status, retell_error: errorText, key_len: retellApiKey.length, key_start: retellApiKey.slice(0,4), key_end: retellApiKey.slice(-4) },
        { status: 503 }
      )
    }

    const data = await res.json()
    return NextResponse.json({ access_token: data.access_token })
  } catch (err) {
    console.error('Failed to create web call:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
