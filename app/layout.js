import Footer from './components/Footer'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Cash Tax',
  description: 'Share and send airtime and cash across countries',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
