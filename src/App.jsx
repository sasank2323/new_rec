import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './toggle'
import Wrapper from './Wrapper'
import CheckboxHandling from './CheckboxHandling'
import ForLoopWithTable from './ForLoopWithTable'

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("hello");
  return (
    <>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => setVal("")}>clear</button>
      <p>{val}</p>
      <CheckboxHandling />
      <ForLoopWithTable />
    </>
  )
}

function sum(a, b) {
  return a + b;
}

export default App
