import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './toggle'
import Wrapper from './Wrapper'
import CheckboxHandling from './CheckboxHandling'
import ForLoopWithTable from './ForLoopWithTable'
import Useeffectcode from './Useeffectcode'

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("hello");
  return (
    <>
      <select onChange={(e) => setVal(e.target.value)}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
      <p>{val}</p>
      <Useeffectcode color={val} />
    </>
  )
}

function sum(a, b) {
  return a + b;
}

export default App
