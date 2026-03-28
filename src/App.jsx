import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './toggle'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Toggle />
    </>
  )
}

function sum(a, b) {
  return a + b;
}

export default App
