import './App.css'
import moneyImg from './assets/money.jpeg'
import {InputBox} from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react'
function App() {

  const [amount, setAmount] = useState(0)  
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo= useCurrencyInfo(from.toLowerCase())
  const options = Object.keys(currencyInfo)

  const convert = () => {
    const result = amount * currencyInfo[to];
    setConvertedAmount(parseFloat(result.toFixed(2)));
  }

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(parseFloat(amount.toFixed(2)))
    setAmount(parseFloat(convertedAmount.toFixed(2)))
  }

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${moneyImg})` }}
    >
      {/* Enhanced dark overlay + backdrop blur for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 backdrop-blur-md" />

      <div className="relative z-20 w-full max-w-lg mx-auto px-6">
        {/* App Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-3 drop-shadow-2xl tracking-wide">
            💱 Currency Converter
          </h1>
          <p className="text-white/90 text-xl drop-shadow-lg font-medium">
            Real-time exchange rates
          </p>
        </div>

        <div className="flex flex-col items-center">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }} className="w-full max-w-md">
            <div className='w-full mb-8 flex justify-center'>
              <InputBox
                label={'From'}
                amount={amount}
                currencyOptions={options}
                oncurrencyChange={(currency)=>{setFrom(currency)}}
                onAmountChange={(amount)=>{setAmount(amount)}}
                selectedCurrency={from}
              />
            </div>
            
            <div className='w-full mb-8 flex justify-center'>
              <button  
                type="button"
                className='bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/40 backdrop-blur-sm'
                onClick={swap}
              >
                ⇅ Swap
              </button>
            </div>
            
            <div className='w-full mb-10 flex justify-center'>
              <InputBox
                label={'To'}
                amount={convertedAmount}
                currencyOptions={options}
                amountDisabled={true}
                oncurrencyChange={(currency)=>{setTo(currency)}}
                selectedCurrency={to}
              />
            </div>
            
            <div className="w-full flex justify-center">
              <button
                type='submit'
                className='w-full max-w-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/30 backdrop-blur-sm'
              >
                🚀 Convert Currency
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/70 text-sm drop-shadow">
            Powered by live exchange rates
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
