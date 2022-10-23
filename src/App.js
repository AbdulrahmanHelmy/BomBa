import React from 'react'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Navbar from './Navbar'
import {BrowserRouter , Routes , Route , Link } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />

      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Shop" element={<Shop/>}/>
      </Routes>
      
    </BrowserRouter>
            
  )
}

export default App