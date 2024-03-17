import { useState } from 'react'
import './App.css'
import Routers from './components/Routers'
import About from './components/About'
import Activity2 from './components/Activity2'
import Product from './components/Product'
import AboutDoctor from './components/AboutDoctor'
import Yoga from "./components/Yoga"
import Home from "./components/Home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Home/>
    </>
  )
}

export default App
