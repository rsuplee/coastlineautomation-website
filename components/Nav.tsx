'use client'

import Link from 'next/link'
import { useEffect } from 'react'

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
          <div className="logo-text">
            <span className="logo-name">Coastline Automation</span>
          </div>
        </Link>
        <ul className="nav-links">
          <li><Link href="/#how-it-works">How It Works</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><a href="mailto:hello@coastlineautomation.co.uk">Contact</a></li>
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
        <Link href="/about">About</Link>
        <a href="mailto:hello@coastlineautomation.co.uk">Contact</a>
      </div>
    </>
  )
}
