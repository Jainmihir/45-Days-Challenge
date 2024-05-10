import React from "react";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import { Outlet } from 'react-router-dom'
function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

// Outlet means yeh dono fix rahaenge  header or footer same rahaenge lekin undr ki chize change hoti rahegi
export default Layout;