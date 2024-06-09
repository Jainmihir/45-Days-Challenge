import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/Home/Home'
import Login from '../src/Login/Login'
import Signup from './Signup/Signup'
import RedirectUrl from './ReDirectUrl/ReDirectUrl';
// import Axios from 'axios'

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      
      <Route path="/shorturl/:shortId" element={<RedirectUrl />} />

    </Routes>
  </Router>
)

function App() {
  // const [data,setData] = useState("");
  // const getData = async()=>{
  //   const response = await Axios.get("http://localhost:8001/getData");
  //   setData(response.data);
  // }

  // useEffect(() => {
  //   getData()
  // },[]);

  return (
    <div>
      {routes}
    </div>
  )
}

export default App;


