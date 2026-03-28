'use client'

import { useEffect } from 'react'

export default function PainSlideshow() {
  useEffect(() => {
    const painSection = document.querySelector('.pain-section')
    if (!painSection) return

    const slides = Array.from(painSection.querySelectorAll('.pain-slide'))
    const label = painSection.querySelector('.pain-label')
    const progressBar = painSection.querySelector('.pain-progress-bar')
    const progressFill = painSection.querySelector('.pain-progress-fill') as HTMLElement
    const footer = painSection.querySelector('.pain-footer')

    let hasPlayed = false
    let current = -1
    const holdMs = 1600

    function showSlide(index: number) {
      if (current >= 0 && current < slides.length) {
        slides[current].classList.remove('active')
        slides[current].classList.add('exiting')
        const prev = slides[current]
        setTimeout(() => prev.classList.remove('exiting'), 500)
      }
      current = index
      if (progressFill) {
        progressFill.style.width = ((index + 1) / slides.length * 100) + '%'
      }
      setTimeout(() => {
        slides[current].classList.add('active')
      }, 100)
    }

    function runSlideshow() {
      label?.classList.add('active')
      progressBar?.classList.add('active')

      let i = 0
      showSlide(0)

      const interval = setInterval(() => {
        i++
        if (i < slides.length) {
          showSlide(i)
        } else {
          clearInterval(interval)
          setTimeout(() => footer?.classList.add('active'), 600)
        }
      }, holdMs)
    }

    function checkInView() {
      if (hasPlayed) return
      const rect = painSection!.getBoundingClientRect()
      const threshold = window.innerHeight * 0.6
      if (rect.top < threshold && rect.bottom > 0) {
        hasPlayed = true
        setTimeout(runSlideshow, 300)
      }
    }

    window.addEventListener('scroll', checkInView, { passive: true })
    checkInView()

    return () => {
      window.removeEventListener('scroll', checkInView)
    }
  }, [])

  return null
}
