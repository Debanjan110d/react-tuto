import { useEffect, useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'

import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme =() => setThemeMode('dark')
  const lightTheme =() => setThemeMode('light')

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])// If any alue this dependency changes, this useEffect will run and re-render the component

  return (
   <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
     <div className="flex flex-wrap min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

        <div className='w-full max-w-2xl'>
          <div className='w-full max-w-sm mx-auto  flex justify-end mb-4'>
            <ThemeBtn/>
          </div>
          <div className='w-full max-w-sm  mx-auto'>
            <Card/>

          </div>
        </div>
       </div>
    </ThemeProvider>
  )
}

export default App
