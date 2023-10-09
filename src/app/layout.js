import './globals.css'
import { Inter, Quicksand } from 'next/font/google'
import  Header  from '../components/Header.js'

const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'LeanLabiano Portafolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="container mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
