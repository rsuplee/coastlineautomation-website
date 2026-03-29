'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { RetellWebClient } from 'retell-client-js-sdk'

type CallState = 'idle' | 'requesting' | 'connecting' | 'connected' | 'ended'

const PHONE_NUMBER = '+44 1922 663 930'
const PHONE_HREF = 'tel:+441922663930'

export default function VoiceAssessment() {
  const [state, setState] = useState<CallState>('idle')
  const [error, setError] = useState<string | null>(null)
  const [seconds, setSeconds] = useState(0)
  const [webrtcSupported, setWebrtcSupported] = useState(true)
  const retellRef = useRef<RetellWebClient | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && !navigator.mediaDevices?.getUserMedia) {
      setWebrtcSupported(false)
    }
  }, [])

  const startTimer = useCallback(() => {
    setSeconds(0)
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000)
  }, [])

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60)
    const s = totalSeconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const startCall = useCallback(async () => {
    setError(null)
    setState('requesting')

    try {
      const res = await fetch('/api/create-web-call', { method: 'POST' })
      if (!res.ok) {
        throw new Error('Failed to connect')
      }
      const { access_token } = await res.json()

      setState('connecting')

      const client = new RetellWebClient()
      retellRef.current = client

      client.on('call_started', () => {
        setState('connected')
        startTimer()
      })

      client.on('call_ended', () => {
        setState('ended')
        stopTimer()
      })

      client.on('error', (err) => {
        console.error('Retell error:', err)
        setState('idle')
        stopTimer()
        setError('Call disconnected. Please try again or call the number below.')
      })

      await client.startCall({ accessToken: access_token })
    } catch (err) {
      console.error('Start call error:', err)
      setState('idle')

      if (err instanceof DOMException && err.name === 'NotAllowedError') {
        setError('Microphone access is required. Please allow microphone access and try again.')
      } else {
        setError('Could not connect. Please try calling the number below instead.')
      }
    }
  }, [startTimer, stopTimer])

  const endCall = useCallback(() => {
    retellRef.current?.stopCall()
    setState('ended')
    stopTimer()
  }, [stopTimer])

  const reset = useCallback(() => {
    setState('idle')
    setError(null)
    setSeconds(0)
  }, [])

  const isActive = state === 'connecting' || state === 'connected'

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/injoinery-logo.svg"
          alt="InJoinery"
          style={styles.logo}
        />
        <p style={styles.subtitle}>Installer Assessment</p>
      </div>

      {/* WebRTC Section */}
      {webrtcSupported && (
        <div style={styles.mainAction}>
          {state === 'ended' ? (
            <div style={styles.completedSection}>
              <div style={styles.checkCircle}>✓</div>
              <p style={styles.completedText}>Assessment complete</p>
              <p style={styles.duration}>Duration: {formatTime(seconds)}</p>
              <button onClick={reset} style={styles.restartLink}>
                Start another assessment
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={isActive ? endCall : startCall}
                disabled={state === 'requesting'}
                style={{
                  ...styles.callButton,
                  ...(isActive ? styles.callButtonActive : {}),
                  ...(state === 'requesting' ? styles.callButtonDisabled : {}),
                }}
                aria-label={isActive ? 'End call' : 'Start assessment'}
              >
                {isActive ? (
                  <StopIcon />
                ) : (
                  <MicIcon />
                )}
                {isActive && <span style={styles.pulse} />}
              </button>

              <p style={styles.stateText}>
                {state === 'idle' && 'Tap to start assessment'}
                {state === 'requesting' && 'Connecting...'}
                {state === 'connecting' && 'Connecting...'}
                {state === 'connected' && 'Assessment in progress'}
              </p>

              {state === 'connected' && (
                <p style={styles.timer}>{formatTime(seconds)}</p>
              )}
            </>
          )}

          {error && (
            <div style={styles.errorBox}>
              <p style={styles.errorText}>{error}</p>
            </div>
          )}
        </div>
      )}

      {/* Divider */}
      {webrtcSupported && (
        <div style={styles.divider}>
          <span style={styles.dividerText}>or</span>
        </div>
      )}

      {/* Phone Section */}
      <div style={styles.phoneSection}>
        <p style={styles.phoneText}>
          or call{' '}
          <a href={PHONE_HREF} style={styles.phoneLink}>
            {PHONE_NUMBER}
          </a>
        </p>
        {!webrtcSupported && (
          <p style={styles.phoneHint}>
            Call the number above to complete your assessment
          </p>
        )}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerText}>
          Powered by{' '}
          <a
            href="https://coastlineautomation.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.footerLink}
          >
            Coastline Automation
          </a>
        </p>
      </div>
    </div>
  )
}

function MicIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="1" width="6" height="11" rx="3" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
}

function StopIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  )
}

const dark = '@media (prefers-color-scheme: dark)'

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '72px 32px 48px',
    maxWidth: '560px',
    margin: '0 auto',
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '72px',
  },
  logo: {
    width: '160px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '16px',
    margin: '10px 0 0',
    fontWeight: 300,
  },
  mainAction: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  callButton: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: 'none',
    background: '#000000',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    transition: 'opacity 0.15s',
    WebkitTapHighlightColor: 'transparent',
  },
  callButtonActive: {
    background: '#000000',
    color: '#ffffff',
  },
  callButtonDisabled: {
    opacity: 0.4,
    cursor: 'wait',
  },
  pulse: {
    position: 'absolute',
    inset: '-10px',
    borderRadius: '50%',
    border: '1px solid #000000',
    animation: 'pulse-expand 1.8s ease-out infinite',
    pointerEvents: 'none',
  },
  stateText: {
    color: '#000000',
    fontSize: '17px',
    fontWeight: 300,
    margin: 0,
  },
  timer: {
    color: '#000000',
    fontSize: '22px',
    fontWeight: 300,
    fontVariantNumeric: 'tabular-nums',
    margin: 0,
    letterSpacing: '0.02em',
  },
  completedSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
  },
  checkCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#000000',
    color: '#ffffff',
    fontSize: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedText: {
    color: '#000000',
    fontSize: '18px',
    fontWeight: 400,
    margin: 0,
  },
  duration: {
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: 300,
    margin: 0,
  },
  restartLink: {
    background: 'none',
    border: 'none',
    color: '#000000',
    fontSize: '15px',
    fontWeight: 300,
    cursor: 'pointer',
    textDecoration: 'underline',
    marginTop: '4px',
    padding: 0,
    fontFamily: 'inherit',
  },
  errorBox: {
    padding: '0',
    maxWidth: '320px',
    textAlign: 'center',
  },
  errorText: {
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: 300,
    margin: 0,
    lineHeight: 1.6,
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '48px 0',
  },
  dividerText: {
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: 300,
  },
  phoneSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  phoneText: {
    color: '#6b7280',
    fontSize: '16px',
    fontWeight: 300,
    margin: 0,
  },
  phoneLink: {
    color: '#000000',
    textDecoration: 'underline',
    fontWeight: 400,
  },
  phoneHint: {
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: 300,
    margin: 0,
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    paddingTop: '64px',
    textAlign: 'center',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: '13px',
    fontWeight: 300,
    margin: 0,
  },
  footerLink: {
    color: '#9ca3af',
    textDecoration: 'underline',
  },
}
