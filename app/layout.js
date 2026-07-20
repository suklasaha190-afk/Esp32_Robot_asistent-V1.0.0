export const metadata = {
  title: 'ESP32 AI Assistant',
  description: 'ESP32 AI Assistant Backend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
