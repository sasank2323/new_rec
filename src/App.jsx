import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './toggle'
import Wrapper from './Wrapper'

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("hello");
  return (
    <>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => setVal("")}>clear</button>
      <p>{val}</p>
      <Wrapper>
        <h1>warpper childern </h1>
        <p>{val}</p>
      </Wrapper>
    </>
  )
}

function sum(a, b) {
  return a + b;
}

export default App
