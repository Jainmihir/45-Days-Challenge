import React, { useEffect, useState } from "react";

export default function MulitpleUsers(){
    
    const [data,setData]  = useState([]);
    const [isloading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
     async function fetchData(){
        try{
            const response = await fetch('https://api.github.com/users')
            const userData = await response.json();
            setData(userData)
            setLoading(false);
        }catch(error){
            setError(error)
            setLoading(false);
        }   
     }
     fetchData();
    },[])

    if(isloading){
        return <p>Loading....</p>
    }
    if(error){
        return <p>Error : {error.message}</p>
    }


    
    return(
        <div>
            <h1>User list :</h1>
            <ul>
                {
                    data.map(user => {
                        return <li key={user.id}>{user.login}</li>
                    })
                }
            </ul>
        </div>
    )
}   