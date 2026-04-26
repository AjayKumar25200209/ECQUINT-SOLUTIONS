import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact"
// (later)
import About from "./pages/About"
// import Recruitment from "./pages/Recruitment"
import AccessibilityWidget from "./components/accessibility/AccessibilityWidget";
import useAccessibilityEffects from "./hooks/useAccessibilityEffects";
import "@/styles/accessibility.css";
import "@/styles/footer.css";
import "@/styles/hero.css";
import "@/styles/navbar.css";


function App() {
	  useAccessibilityEffects();

  return (
    <Router>
      <div className="bg-gray-50 text-gray-900 min-h-screen">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Global accessibility layer */}
        <AccessibilityWidget />

      </div>
    </Router>
  );
}

export default App;
