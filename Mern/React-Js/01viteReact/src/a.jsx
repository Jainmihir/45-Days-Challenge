import React, { createContext } from "react";
import C from './c'
const UserContext = createContext();



export default function A(){

    const greet = "Hello Ji "
    const greet1 = "Mihir"

    return(
        <UserContext.Provider value={{greet,greet1}}>
            <C/>
        </UserContext.Provider>
    )
}

export {UserContext}