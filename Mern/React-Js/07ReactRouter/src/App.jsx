import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Aboutus from './Components/Aboutus/About'
import ContactUs from './Components/ContactUs/Contact'
import Home from './Components/Home/Home'
function App() {

  return (
    <>
    <Header/>
      <Home/>
      <Aboutus/>
      <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
