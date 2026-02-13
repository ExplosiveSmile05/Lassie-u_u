import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import foto1 from "./assets/yo-y-lassie.png"
import foto2 from "./assets/mayonesaenlosojos.jpg"
import Component from './components/Component.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

      <h1 className='texto texto--xl'>¿Quieres ser mi valentin?</h1>
      <div style={{ marginBottom: '50px' }}>
        <Component />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <img src={foto1}/>
      </div>
      <div>
        <h2 className='texto texto--sm'>Yo si dices que no</h2>
        <img src={foto2} alt="Yo y Lassie" />
      </div>
    </div>
  )
}

export default App
