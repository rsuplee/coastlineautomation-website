'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

export default function GsapInit() {
  useEffect(() => {
    // Wait for GSAP to load from CDN
    const checkGsap = setInterval(() => {
      if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
        clearInterval(checkGsap)
        initAnimations()
      }
    }, 100)

    return () => clearInterval(checkGsap)
  }, [])

  return null
}

function initAnimations() {
  const gsap = window.gsap
  const ScrollTrigger = window.ScrollTrigger

  gsap.registerPlugin(ScrollTrigger)

  // Hero entrance
  const heroElements = document.querySelectorAll('.hero-fade')
  if (heroElements.length > 0) {
    const heroTimeline = gsap.timeline({ delay: 0.3 })

    heroTimeline
      .to('.eyebrow', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
      .to('.hero-headline', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4')
      .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
      .to('.hero-actions', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.3')
      .to('.agent-hero-demo', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .to('.hero-bottom', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.3')
  }

  // Generic reveal animation
  gsap.utils.toArray('.reveal').forEach((el: any) => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
    })
  })

  // Staggered card reveals
  document.querySelectorAll('.stagger-group').forEach((group) => {
    const children = group.querySelectorAll('.stagger-item')
    gsap.from(children, {
      scrollTrigger: { trigger: group, start: 'top 80%', toggleActions: 'play none none none' },
      opacity: 0, y: 36, duration: 0.6, stagger: 0.12, ease: 'power2.out',
    })
  })
}
