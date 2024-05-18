import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0); 
  
  const addValue = ()=>{
    setCounter((prevCounter) => prevCounter+1);
  }

  const removeValue = () =>{
    setCounter(counter-1);
  }

  const resetValue = () =>{
    setCounter(0);
  }

  return (
    <>
    <h1>Tiftu Counter Project!</h1>
    <h2>Counter Value : {counter} </h2>
    <button onClick={addValue}> Add Value :{counter} </button>
    <br/>
    <button onClick={removeValue}> Remove Value :{counter}</button>
    <br/>
    <button onClick={resetValue}> Reset Value :{counter}</button>
    </>
  )
}

export default App
