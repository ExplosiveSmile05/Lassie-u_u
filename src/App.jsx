import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Component from './Components/Component.jsx'
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
        <img src="/src/assets/Yo y lassie.png" alt="Yo y Lassie" />
      </div>
      <div>
        <h2 className='texto texto--sm'>Yo si dices que no</h2>
        <img src="/src/assets/mayonesaenlosojos.jpg" alt="Yo y Lassie" />
      </div>
    </div>
  )
}

export default App
