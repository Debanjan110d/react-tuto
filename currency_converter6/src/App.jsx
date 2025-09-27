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
  // build options from fetched rates; when rates aren't yet available
  // fallback to the current selection so the selects render immediately
  let options = Object.keys(currencyInfo || {})
  if (!options || options.length === 0) {
    options = Array.from(new Set([from.toLowerCase(), to.toLowerCase()]))
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  // Swap the currencies and the displayed amounts
  const swap = () => {
    const prevFrom = from
    const prevTo = to
    const prevAmount = amount
    const prevConverted = convertedAmount

    setFrom(prevTo)
    setTo(prevFrom)

    // swap the numeric values so the UI feels natural after swapping
    setAmount(prevConverted)
    setConvertedAmount(prevAmount)
  }

  return (
    <div
      className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${moneyImg})` }}
    >
      {/* subtle dark overlay + backdrop blur for contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      <div className="relative z-20 p-6">
        <div className="space-y-6">
          {/* From box: editable amount and currency selector */}
          <div className="relative">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              currencyOptions={options}
              selectedCurrency={from}
              oncurrencyChange={setFrom}
            />

            {/* Swap button centered between the two boxes */}
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 top-full -mt-8 bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg"
            >
              swap
            </button>
          </div>

          {/* To box: shows converted value and allows picking target currency */}
          <div className="relative">
            <InputBox
              label="To"
              amount={convertedAmount}
              amountDisabled={true}
              currencyOptions={options}
              selectedCurrency={to}
              oncurrencyChange={setTo}
            />
          </div>

          {/* Convert button: triggers the conversion using fetched rates */}
          <div>
            <button
              type="button"
              onClick={() => {
                // guard: only convert when rate for `to` exists
                if (!currencyInfo || currencyInfo[to] == null) return
                convert()
              }}
              className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold shadow-md"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
