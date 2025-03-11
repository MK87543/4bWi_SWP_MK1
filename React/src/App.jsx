import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Liste from './components/Liste.jsx'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <Liste />
        <Liste />
        <Liste />
        <Liste />
        <Liste />
        <Liste />
      </div>

      <div className='flex justify-around'>
        <Button />
        <Button />
        <Button />
      </div>

      <div className=' flex justify-around'>
        <Card Name="John Doe" info="Software Engineer" />
        <Card Name="Jane Smith" info="UX Designer" />
        <Card Name="PEter Gsteu" info="Bester Mann" />

      </div>


    </>
  )
}

export default App
