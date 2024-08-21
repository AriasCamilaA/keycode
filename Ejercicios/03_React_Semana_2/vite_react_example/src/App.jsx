import { useState } from 'react'
import {Selects} from './components/Selects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Aprendizaje React</h1>
      <div className='card'>
        <h3>Selects Anidados</h3>
        {/* SelectAnidados */}
        <Selects/>
      </div>
    </>
  )
}

export default App
