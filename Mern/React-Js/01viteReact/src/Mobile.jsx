import React from "react";
import './Mobile.css'
import { useState } from "react";

export default function Mobile(props){

    const [cart,addCart] = useState(null)
    
    let {img,name,price} = props
    
   
    // const img = "https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg";
    // const name = "Iphone 14 Pro Max"
    // const price = "$200"
    const addToCart = () => {
        addCart((prev) => prev+1);
    }
    
    return (
        <div className='main'>
            <img id='img' src={img} alt="Error"/>
            <div>
            <h2>{name}</h2>
            <h2>{price}</h2>
            <button onClick={addToCart}>Cart : {cart}</button>
            </div>
        </div>
    )
}