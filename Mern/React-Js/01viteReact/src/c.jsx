import React, { useContext } from "react";
import { UserContext } from "./a";

export default function C(){
    // const {greet} = useContext(UserContext)
    const {greet,greet1} = useContext(UserContext)
    return <div>
                {greet}
                {greet1}
            </div>
    // return(
    //     <UserContext.Consumer>
    //          {
    //             (val) => {
    //                 return <h1>{val}</h1>
    //             }
    //          }   
    //     </UserContext.Consumer>
    // )
}