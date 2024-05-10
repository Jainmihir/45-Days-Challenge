import { useState } from "react"
import Chai from "./Chai"
function App() {
  const [count,setCount] = useState(0);
  const addcount = () => {
    setCount((prev) => prev+1);
  }

  return (
    <>
    <h1> count :  {count} </h1>
    <button onClick={addcount}>+</button>
    <Chai/>
    </>
  )
}

export default App
