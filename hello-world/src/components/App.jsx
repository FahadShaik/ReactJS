import NavBarLinkClass from "./Routing/NavBarLinkClass";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserLC from "./APICalls/UserLC";
import EmpLC from "./APICalls/EmpLC";
import BSForm from "./FormHandling/BSForm";
import SimpleFormHooks from "./FormHandling/SimpleFormHooks";

const App = () => {
  return (
    <div>
      <Router>
        <NavBarLinkClass />
        <Routes>
          <Route path="/contact" element={<BSForm />} />
          <Route path="/users" element={<UserLC />} />
          <Route path="/employees" element={<EmpLC />} />
          <Route path="/login" element={<SimpleFormHooks />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
