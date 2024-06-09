import React, { useContext } from "react";

import { GreetContext } from "./A";

export default function C(){
    const con =  useContext(GreetContext);
    return(
        <>
        <h1> greet {con} </h1>
        </>
    )
}