'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = document.cookie
      .split('; ')
      .find((c) => c.startsWith('rc_cookie_consent='))
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function setCookie(value: string) {
    document.cookie = `rc_cookie_consent=${value}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          We use cookies to improve your experience. See our{' '}
          <Link href="/cookies">Cookie Policy</Link> for details.
        </p>
        <div className="cookie-banner-actions">
          <button
            className="cookie-btn cookie-btn-reject"
            onClick={() => setCookie('rejected')}
          >
            Reject non-essential
          </button>
          <button
            className="cookie-btn cookie-btn-accept"
            onClick={() => setCookie('accepted')}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
