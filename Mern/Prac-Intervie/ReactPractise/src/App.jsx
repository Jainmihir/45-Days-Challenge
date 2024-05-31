import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Mobile from './List/Mobile'
import Mobilelist from './List/Mobilelist'

function App() {

  const book1={
     image :  "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/z/i/f6-5g-mzb0h35in-poco-original-imahf3a8yfqptxg2.jpeg?q=70",
     name : "Andorid mobile",
     price : "$400" ,
  }

  const book2 = [ 
  {
    image :  "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/z/i/f6-5g-mzb0h35in-poco-original-imahf3a8yfqptxg2.jpeg?q=70",
    name : "Andorid mobile",
    price : "$400" ,
  },
  {
    image :  "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/z/i/f6-5g-mzb0h35in-poco-original-imahf3a8yfqptxg2.jpeg?q=70",
    name : "Andorid mobile",
    price : "$400" ,
  }
  ]


  return (
    <>
      {Mobilelist.map((ele) => {
        return <Mobile image={ele.image} name={ele.name} price={ele.price}/>
      })} 
      {/* <Mobile image={book1.image} name={book1.name} price={book1.price}/> */}
    </>
  )
}

export default App
