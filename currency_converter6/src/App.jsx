import './App.css'
import moneyImg from './assets/money.jpeg'
import InputBox from './components/inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react'
function App() {

  const [amount, setAmount] = useState(0)  
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo= useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap =()=>{
    setFrom(to)
    setTo(from)
  }

  return (
    <div
      className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${moneyImg})` }}
    >
      {/* subtle dark overlay + backdrop blur for contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      <div className="relative z-20">
        <InputBox />
        <InputBox />
      </div>
    </div>
  )
}

export default App
