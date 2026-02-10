import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Body from "./Body"
import Login from "./Login"
import Feed from "./Feed"


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
