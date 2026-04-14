declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
    }
  }
}

export function openCalendlyCA(e: React.MouseEvent) {
  e.preventDefault()
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/richard-coastlineautomation/30min?primary_color=1A5E63&text_color=1A5E63',
    })
  }
}
