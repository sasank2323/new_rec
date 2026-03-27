import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { First, Second } from './multiple_export'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <First />
      <Second />
    </>
  )
}

function sum(a, b) {
  return a + b;
}

export default App
