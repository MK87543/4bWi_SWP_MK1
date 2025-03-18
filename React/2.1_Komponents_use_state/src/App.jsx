import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicks from './components/click_count.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-3 gap-4'>
      <Clicks />
      <Clicks />
      <Clicks />
      <Clicks />
    </div>
  )
}

export default App
