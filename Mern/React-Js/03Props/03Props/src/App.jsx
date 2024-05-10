import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  
  const [count, setCount] = useState(0)
  
  // let myobj = {
  //   name : Mihir ,
  //   email : "jainsuresh713@gmail.com"
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Mihir Jain ! Tailwind is started  </h1>
      <Card username="Lokit Jain" btnText="Click Me" />
      <Card username="Mihir Jain" btnText="Visit Me"/>
      {/* <Card/> 
      <Card channel="Mihir Jain" someobj={myobj}/>
       */}
     
     
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="/https://images.https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load.com/photos/20167684/pexels-photo-20167684/free-photo-of-a-woman-in-a-blue-dress-with-a-blue-and-red-pattern.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load-dayan.jpg" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div >
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
    </>
  )
}

export default App
