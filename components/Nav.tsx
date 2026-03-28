'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { openCalendly } from '@/lib/calendly'

export default function Nav() {
  useEffect(() => {
    const btn = document.getElementById('hamburger')
    const drawer = document.getElementById('mobile-drawer')
    const backdrop = document.getElementById('drawer-backdrop')
    if (!btn || !drawer || !backdrop) return

    function openMenu() {
      btn!.classList.add('open')
      drawer!.classList.add('open')
      backdrop!.classList.add('open')
      document.body.style.overflow = 'hidden'
    }

    function closeMenu() {
      btn!.classList.remove('open')
      drawer!.classList.remove('open')
      backdrop!.classList.remove('open')
      document.body.style.overflow = ''
    }

    function toggleMenu() {
      drawer!.classList.contains('open') ? closeMenu() : openMenu()
    }

    btn.addEventListener('click', toggleMenu)
    backdrop.addEventListener('click', closeMenu)

    const drawerLinks = drawer.querySelectorAll('a')
    drawerLinks.forEach((link) => link.addEventListener('click', closeMenu))

    // Nav scroll effect
    const nav = document.querySelector('.site-nav')
    function handleScroll() {
      if (!nav) return
      if (window.scrollY > 80) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      btn.removeEventListener('click', toggleMenu)
      backdrop.removeEventListener('click', closeMenu)
      drawerLinks.forEach((link) => link.removeEventListener('click', closeMenu))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="logo">
          <img src="/images/logo.svg" alt="RingCatch" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-name">RingCatch</span>
            <span className="logo-sub">by Coastline Automation</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li><Link href="/#how-it-works">How It Works</Link></li>
          <li><Link href="/#agents">Our Agents</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/#faq">FAQ</Link></li>
          <li><a href="#" className="nav-cta" onClick={openCalendly}>Schedule a Call</a></li>
          <li><a href="https://app.ringcatch.ai/auth/sign-in" className="nav-login">Log In</a></li>
          <li><a href="https://app.ringcatch.ai/auth/sign-up" className="nav-get-started">Get Started</a></li>
        </ul>
        <button className="hamburger" id="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="drawer-backdrop" id="drawer-backdrop"></div>
      <div className="mobile-drawer" id="mobile-drawer">
        <Link href="/#how-it-works">How It Works</Link>
        <Link href="/#agents">Our Agents</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/#faq">FAQ</Link>
        <a href="#" className="drawer-cta" onClick={openCalendly}>Schedule a Call</a>
        <a href="https://app.ringcatch.ai/auth/sign-in" className="drawer-login">Log In</a>
        <a href="https://app.ringcatch.ai/auth/sign-up" className="drawer-get-started">Get Started</a>
      </div>
    </>
  )
}
