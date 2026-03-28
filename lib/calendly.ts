declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export function openCalendly(e?: React.MouseEvent | MouseEvent) {
  if (e) e.preventDefault()
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/richard-coastlineautomation/30min?primary_color=1A5E63&text_color=1A5E63',
    })
  }
}
