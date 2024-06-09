import React, { createContext } from "react";

const GreetContext = createContext();

export default function A(){
    const greet = "Hello"

    return (
        <div>
            <GreetContext.Provider value={greet}>
            <C/>
            </GreetContext.Provider>
        </div>
    )
}

export {GreetContext};