import React,{use, useId} from 'react'

function InputBox({
  label ,
  amount ,
  onAmountChange,
  oncurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'USD',
  amountDisabled = false,
  currencyDisabled = false,
  className = ''
}) {
  const id = useId()
  return (
    <div className={`bg-white/60 backdrop-blur-sm p-6 rounded-xl text-sm flex flex-col shadow-2xl w-96 ${className}`}>
      <div className="w-full mb-3">
        <label htmlFor={id} className="block text-gray-800 text-lg font-medium mb-2">{label}</label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-3 text-2xl font-semibold text-gray-900 placeholder-gray-500"
          placeholder="Amount"
          value={amount}
          onFocus={() => {
            // if the field starts with 0, clear it as soon as the user focuses/taps
            if (onAmountChange && (amount === 0 || amount === '0')) {
              onAmountChange('')
            }
          }}
          onTouchStart={() => {
            if (onAmountChange && (amount === 0 || amount === '0')) {
              onAmountChange('')
            }
          }}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisabled}
        />
      </div>
      <div className=''>
        <p>Currency Type</p>
        <select  value={selectedCurrency} 
        onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}
        disabled={currencyDisabled}>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox