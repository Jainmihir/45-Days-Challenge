import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  // usestate hook a basic change in state on UI and in changes ko progate kiya jata h UI me or yeh reponsible hai  
  // useState(o,true,false,"",{},[])
  let [counter,setCounter] = useState(15); 

  

  const addValue = ()=>{
    if(counter  < 20 ){
      // counter = counter + 1;
      // counter = counter + 1;
      // counter = counter + 1;
    // console.log(counter);
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
      // usestate -> react fibre ki wjh se counter ko batches ki form me bhejta h isliye woh ek sath counter ko update nhi kr paate 
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
    }
  }
  // const addValue = document.querySelector('#onclick')
  // addValue.addEventListener('click',(e)=>{
  //   if(counter  < 20 ){
  //         counter = counter + 1;
  //       // console.log(counter);
  //         setCounter(counter);
  //   }
  // });

  const removeValue = () =>{
    if(counter > 0){
      counter = counter-1;
      setCounter(counter);
    }
  }

  return (
    <>
    <h1>Hello World !</h1>
    <h2>Counter Value : {counter} </h2>
    <button onClick={addValue}> Add Value :{counter} </button>
    <br/>
    <button onClick={removeValue}> Remove Value :{counter}</button>
    </>
  )
}

export default App
