'use client'

import { useEffect } from 'react'

export default function FaqAccordion() {
  useEffect(() => {
    const items = document.querySelectorAll('.faq-item')

    function handleClick(this: HTMLElement) {
      const item = this.closest('.faq-item') as HTMLElement
      if (!item) return
      const answer = item.querySelector('.faq-answer') as HTMLElement
      const isOpen = item.classList.contains('open')

      // Close all others
      items.forEach((other) => {
        other.classList.remove('open')
        const otherAnswer = other.querySelector('.faq-answer') as HTMLElement
        if (otherAnswer) otherAnswer.style.maxHeight = ''
      })

      if (!isOpen) {
        item.classList.add('open')
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px'
      }
    }

    items.forEach((item) => {
      const question = item.querySelector('.faq-question')
      if (question) question.addEventListener('click', handleClick)
    })

    return () => {
      items.forEach((item) => {
        const question = item.querySelector('.faq-question')
        if (question) question.removeEventListener('click', handleClick)
      })
    }
  }, [])

  return null
}
