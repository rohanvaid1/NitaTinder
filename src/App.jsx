import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Login from "./components/Login"  
import Feed from "./components/Feed"

function App() {

  return (
    <>
       <BrowserRouter basename="/">
          <Routes>
              <Route path="/" element={<Body />} >
                <Route path="login" element={<Login />} />
                <Route path="feed" element={<Feed />} />
              </Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
