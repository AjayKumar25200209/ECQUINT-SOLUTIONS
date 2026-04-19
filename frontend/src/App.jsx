import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact"
// (later)
import About from "./pages/About"
// import Recruitment from "./pages/Recruitment"

function App() {
	return (
		<Router>
			<div className="bg-gray-50 text-gray-900 min-h-screen">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
