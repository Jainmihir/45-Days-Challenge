import React, { useEffect, useState, useSyncExternalStore } from "react";

function Hook(){
    
    // const [clicked,setClicked]  = useState('')

    // useEffect(()=>{
    //     alert("Buttons")
    // },[clicked])

    const [users,setUsers] = useState([]);

    useEffect(()=> {
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch(error => console.log(error))
    },[])


    return (
        <div>
            <h1>Users :</h1>
           <ul>
            {users.map(user => {
                return <li keys={user.id}>
                    <a href={user.html_url} target="_blank"  >{user.login}</a>
                </li>
            }
            )}
           </ul>

            {/* <button onClick={() => setClicked('Button 1')}>Button 1</button>
            <button onClick={() => setClicked('Button 2')}>Button 2</button>
            <button onClick={() => setClicked('Button 3')}>Button 3</button>
            <h1>{clicked}</h1> */}
        </div>

    )
}
export default Hook