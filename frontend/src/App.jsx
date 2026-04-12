import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
// (later)
// import About from "./pages/About"
// import Recruitment from "./pages/Recruitment"

function App() {
  return (
    <Router>
      <div className="bg-[#0B0F19] text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Add later */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/recruitment" element={<Recruitment />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App