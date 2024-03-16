import { useState } from 'react'
import './App.css'
import Routers from './components/Routers'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routers/>
  {/* <About/> */}
    </>
  )
}

export default App
