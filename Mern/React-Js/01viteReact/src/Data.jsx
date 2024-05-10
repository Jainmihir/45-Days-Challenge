import React from "react";
import datas from './list.json'
import { useState } from "react";
function Data(){
    const [ndata,setData] = useState(datas);
    // console.log(datas)
    // console.log(datas[0].item)
    const handleClick = () => {
        setData([])
    }
    const handleRemove = (itemId) => {
        setData(ndata.filter(items =>
            items.id !== itemId)
        )
    }
    const handleUpdate = (itemId) => {
        setData(ndata.map(items => {
            if(items.id === itemId){
                return{name:"Galaxy"}
            }else{
                return items;
            }
        }))
    }

    return(
        <div>
            <ul>
                {
                    ndata.map((items) => 
                    <li keys={items.id}>    
                        {items.name}
                        <br/>
                        {/* <img src={items.img} alt="Error"/>                         */}
                        <button onClick={()=> handleRemove(items.id)}> Remove</button>
                        <button onClick={()=> handleUpdate(items.id)}> Update</button>
                    </li>
                     )
                }
                
            </ul>
            <button onClick={handleClick}>Clear</button>
        </div>
    )
}

export default Data