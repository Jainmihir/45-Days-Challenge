import React, { useEffect } from "react";
import { useState } from "react";

export default function Mobile(props){
    const {image,name,price} = props 

    const [users,setUsers] = useState([]);
   
    useEffect(() => {
        fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))

    },[])

    
    
    const [count,setCount] = useState(0);
    const counter = () => {
        setCount((prevCounter) => prevCounter+1);
        setCount((prevCounter) => prevCounter+1);
        setCount((prevCounter) => prevCounter+1);
    }

    return (
        
        
            <div>
                <h1>User List</h1>
                <ul>
                    {
                        users.map(user => {
                           return <li key={user.id}>{user.login}</li>
                        })
                    }
                </ul>
            </div>
            

       

    )
}