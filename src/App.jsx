import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './toggle'
import Wrapper from './Wrapper'
import CheckboxHandling from './CheckboxHandling'
import ForLoopWithTable from './ForLoopWithTable'
import Useeffectcode from './Useeffectcode'
import { Button } from 'react-bootstrap'
import RefHook from './refHook'
import Parent from './Parent'

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("hello");
  return (
    <>
      <Parent />
      <RefHook />
    </>
  )
}

function sum(a, b) {
  return a + b;
}

export default App
