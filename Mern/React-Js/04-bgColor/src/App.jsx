import { useState } from "react"

function App() {
 
  const [color,setColor] = useState("olive")


  return (
      <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-1xl">
                <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
                style={{backgroundColor: "red"}}>Red</button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-1xl">
                <button onClick={()=> setColor("white")} className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg"
                style={{backgroundColor: "white"}}>White</button>
              </div>

              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-1xl">
                <button onClick={()=> setColor("purple")} title="purple" className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
                style={{backgroundColor: "purple"}}>Purple</button>
              </div>

              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-1xl">
                <button onClick={()=> setColor("pink")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
                style={{backgroundColor: "pink"}}>Pink</button>
              </div>

              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-1xl">
                <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
                style={{backgroundColor: "blue"}}>Blue</button>
              </div>

              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-1xl ">
                <button onClick={()=> setColor("yellow")}  className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
                style={{backgroundColor: "yellow"}}>Yellow</button>
              </div>

              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-1xl">
                <button onClick={()=> setColor("black")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg border-width: 2px;"
                style={{backgroundColor: "black"}}>Black</button>
              </div>
          </div>

      </div>
  )
}

export default App
