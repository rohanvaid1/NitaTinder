import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Body from "./components/Body"



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
