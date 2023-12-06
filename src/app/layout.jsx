import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: 'Mupu Viajes',
  description: 'Agentes de viajes certificados'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}