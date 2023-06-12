import BuyMethod from './components/BuyMethod'
import Downloads from './components/Downloads'
import HeroSection from './components/HeroSection'
import NavbarOne from './components/NavbarOne'
import SendTransferCost from './components/SendTransferCost'
import TransferFunds from './components/TransferFunds'

export default function Home() {
  return (
    <main>
      <NavbarOne/>
      <HeroSection/>
      <BuyMethod/>
      <TransferFunds/>
      <SendTransferCost/>
      <Downloads/>
    </main>
  )
}
