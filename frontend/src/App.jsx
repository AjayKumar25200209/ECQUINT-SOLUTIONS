import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CareersPage from "./pages/CareersPage";
import HirePage from "./pages/HirePage";

// Accessibility
import AccessibilityWidget from "./components/accessibility/AccessibilityWidget";
import useAccessibilityEffects from "./hooks/useAccessibilityEffects";
import { useAccessibilityStore } from "./store/accessibilityStore";

// Styles
import "@/styles/accessibility.css";
import "@/styles/footer.css";
import "@/styles/hero.css";
import "@/styles/navbar.css";

function App() {
  useAccessibilityEffects();

  const {
    textSize,
    contrast,
    highlightLinks,
    cursorSize,
    reduceMotion,
  } = useAccessibilityStore();

  return (
    <Router>
      <div
        className={`
          min-h-screen bg-gray-50 text-gray-900

          ${textSize === "large" ? "a11y-text-large" : ""}
          ${textSize === "xlarge" ? "a11y-text-xlarge" : ""}

          ${contrast === "high" ? "a11y-contrast" : ""}
          ${highlightLinks ? "a11y-highlight" : ""}

          ${cursorSize === "large" ? "a11y-cursor-large" : ""}
          ${cursorSize === "xlarge" ? "a11y-cursor-xlarge" : ""}

          ${reduceMotion ? "a11y-reduce-motion" : ""}
        `}
      >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/hire" element={<HirePage />} />
        </Routes>

        {/* Accessibility Widget */}
        <AccessibilityWidget />

      </div>
    </Router>
  );
}

export default App;