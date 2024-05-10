import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/Aboutus/About.jsx'
import Contact from './Components/ContactUs/Contact.jsx'
import Home from './Components/Home/Home'
import User from './Components/User/User.jsx'
import Github, {githubInfoLoader} from './Components/Github/Github.jsx'

// router provider ek prop leta hai 

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children: [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "",
//         element : <Aboutus/>
//       },
//       {
//         path : "",
//         element : <ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contactus' element={<Contact />} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader={githubInfoLoader}
      path='github' element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
