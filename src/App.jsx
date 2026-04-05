import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
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
import Useactionstate from './Useactionstate'
import Uuid from './UUid'
import { CounterProvider } from './ContextData'
import LazyLoadingEx from './LazyLoadingEx'
function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("hello");
  return (
    <>


      <LazyLoadingEx />
    </>
  )
}

function sum(a, b) {
  return a + b;
}

export default App



