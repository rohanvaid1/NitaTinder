import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"


function App() {

  return (
    <>
       <BrowserRouter basename="/">
          <Routes>
              <Route path="/" element={<Navbar />} />
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
