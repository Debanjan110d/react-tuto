import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

// Minimal CopyButton component (keeps changes small)
function CopyButton({ password, onCopy, setButtonRef }) {
  // Minimal presentational button — actual copy logic lives in parent via onCopy
  return (
    <button
      id="copy-button"
      ref={(el) => setButtonRef && setButtonRef(el)}
      onClick={onCopy}
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-500"
      type="button"
    >
      Copy
    </button>
  )
}

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordref = useRef(null)


  const generate_password= useCallback(()=>{
// build pool (keeps your variable names)
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
if (numberAllowed) chars += "0123456789"
if (specialCharacterAllowed) chars += "!@#$%&*"

// tiny helper: shuffle the chars string (Fisher–Yates)
function shuffleString(s) {
  const arr = s.split('')
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.join('')
}

chars = shuffleString(chars) // randomize order so specials aren't stuck at the end

// generate password (same style as yours)
let password = ""
for (let i = 0; i < length; i++) {
  let randomNum = Math.floor(Math.random() * chars.length)
  password += chars.charAt(randomNum)
}

// helper to replace a random position in the password
function replaceAtRandom(str, ch) {
  if (str.length === 0) return ch
  const idx = Math.floor(Math.random() * str.length)
  return str.slice(0, idx) + ch + str.slice(idx + 1)
}

// tiny guarantees: if option checked but missing from password, force one in
if (numberAllowed && !/[0-9]/.test(password)) {
  const digit = "0123456789".charAt(Math.floor(Math.random() * 10))
  password = replaceAtRandom(password, digit)
}

if (specialCharacterAllowed && !/[!@#$%&*]/.test(password)) {
  const sym = "!@#$%&*".charAt(Math.floor(Math.random() * 7))
  password = replaceAtRandom(password, sym)

    }
    setPassword(password)
  },[numberAllowed,specialCharacterAllowed,length])

  useEffect(()=>{
    generate_password()
  },[numberAllowed,specialCharacterAllowed,length,generate_password])

  const copy_password_to_clipboard = useCallback(async () => {
    try {
      await window.navigator.clipboard.writeText(password)

      // if password input ref exists, select text and change color briefly
      const inputEl = passwordref.current && passwordref.current.input
      if (inputEl && typeof inputEl.select === 'function') {
        inputEl.select()
        const prevColor = inputEl.style.color || ''
        inputEl.style.color = '#10b981' // teal/green
        setTimeout(() => {
          inputEl.style.color = prevColor
        }, 1500)
      }

      // if button ref stored, change its text briefly
      const btnEl = passwordref.current && passwordref.current.button
      if (btnEl) {
        const prev = btnEl.innerText
        btnEl.innerText = 'Copied'
        setTimeout(() => (btnEl.innerText = prev), 1500)
      }
    } catch (e) {
      console.error('copy failed', e)
    }
  }, [password])

  // const change_the_button_text = ()=>{
  //   const copyButton = document.querySelector('#copy-button')
  //   copyButton.onclick = copy_password_to_clipboard
  //   copyButton.innerText = "Copied"}

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[520px] bg-slate-800 rounded-2xl p-8 shadow-2xl relative">
        <h1 className="text-center text-2xl font-semibold text-white mb-6">Password generator</h1>

        
          <div className="relative mb-6">
            <input
              type="text"
              value={password}
              readOnly
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 pr-28 rounded-lg bg-white placeholder-orange-300 text-orange-500 font-semibold border-2 border-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
              ref={(el) => {
                if (!passwordref.current) passwordref.current = {}
                passwordref.current.input = el
              }}
            />

            {/* Copy button with feedback */}
            {/* pass parent copy handler and setButtonRef so we can store button on the same ref */}
            <CopyButton password={password} onCopy={copy_password_to_clipboard} setButtonRef={(el) => {
              if (!passwordref.current) passwordref.current = {}
              passwordref.current.button = el
            }} />
          </div>
        <div className="mb-4">
          <input
            type="range"
            min={8}
            max={16}
            value={length}
            onChange={(e) => setLength(+e.target.value)}
            className="w-full h-1 accent-orange-400"
          />
        </div>

        {/* controls row */}
        <div className="flex items-center justify-between mt-2">
          <div className="text-orange-400 font-medium">
            Length: <span className="text-white font-semibold">{length}</span>
          </div>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 select-none text-white">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(!numberAllowed)}
                className="h-4 w-4 rounded border-gray-300 bg-white"
              />
              <span className="text-sm font-medium">Numbers</span>
            </label>

            <label className="flex items-center gap-2 select-none text-white">
              <input
                type="checkbox"
                checked={specialCharacterAllowed}
                onChange={() => setSpecialCharacterAllowed(!specialCharacterAllowed)}
                className="h-4 w-4 rounded border-gray-300 bg-white"
              />
              <span className="text-sm font-medium">Special Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
