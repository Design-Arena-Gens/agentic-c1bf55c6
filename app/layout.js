export const metadata = {
  title: 'Five Nights at Freddy\'s - PT-BR',
  description: 'Experiência interativa FNAF em português',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
