import NavBarLinkClass from "./Routing/NavBarLinkClass";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routing/navfiles/Home";
import About from "./Routing/navfiles/About";
import Services from "./Routing/navfiles/Services";
import Contact from "./Routing/navfiles/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <NavBarLinkClass />
        <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
