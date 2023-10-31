import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './component/Dashboard'
import Tracker from './page/Tracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
      <Tracker/>

    </>
  )
}

export default App
