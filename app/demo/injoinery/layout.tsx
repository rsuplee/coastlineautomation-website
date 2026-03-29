import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'InJoinery — Installer Assessment',
  description: 'Complete your InJoinery installer assessment via voice call.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function InJoineryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        nav, footer, .cookie-banner { display: none !important; }
        body { margin: 0; padding: 0; background: #ffffff; }
        @media (prefers-color-scheme: dark) {
          body { background: #000000; }
        }
        @keyframes pulse-expand {
          0% { transform: scale(1); opacity: 0.25; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
      {children}
    </>
  )
}
