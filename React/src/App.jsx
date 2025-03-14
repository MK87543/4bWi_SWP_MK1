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
        <Liste l1="coffe" l2="cola" l3="tea" />
        <Liste l1="tea" l2="coffee" l3="tea" />
        <Liste l1="fanta" l2="bear" l3="water" />
        <Liste l1="coffe" l2="cola" l3="coffee" />
        <Liste l1="tea" l2="cola" l3="tea" />
        <Liste l1="coffee" l2="cola" l3="cola" />
      </div>


      <div className='flex justify-around'>
        <Button info="clear" />
        <Button info="try it" />
        <Button info="big button" />
      </div>

      <div className=' grid grid-cols-3 gap-4'>
        <Card Name="John Doe" info="Software Engineer" />
        <Card Name="Jane Smith" info="UX Designer" />
        <Card Name="Peter Gsteu" info="Bester Mann" />
        <Card Name="Matthias Hagen" info="besser als Peta" />
        <Card Name="Terry Cruse" info="Inspiration" />
        <Card Name="David Goggins" info="hardest man on earth" />
        <Card Name="Raphi" info="isch do" />
        <Card Name="Elina" info="confident" />
        <Card Name="geter magen" info="besser als beide" />
        <Card Name="hatthias msteu" info="besser als der oane" />


      </div>

      <div>
        <Button info="be friendly" />

      </div>


    </>
  )
}

export default App
