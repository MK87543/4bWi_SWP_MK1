import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componentes/card.jsx'


function App() {
  const [count, setCounta] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 p-4 text-center">hello</h1>

      <div className="flex">
        <Card name={"Lenz"} jobtitle={"AV"} desciption={"lässig"} />
        <Card name={"Sams"} jobtitle={"AV"} desciption={"auch lässig"} />

      </div>




      test

    </>
  )
}

export default App
