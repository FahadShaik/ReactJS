import NavBarLinkClass from "./Routing/NavBarLinkClass";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import EmpLC from "./APICalls/EmpLC";
import BSForm from "./FormHandling/BSForm";
import SimpleFormHooks from "./FormHandling/SimpleFormHooks";
import UserFC from "./APICalls/UserFC";

const App = () => {
  return (
    <div>
      <Router>
        <NavBarLinkClass />
        <Routes>
          <Route path="/contact" element={<BSForm />} />
          <Route path="/users" element={<UserFC />} />
          <Route path="/employees" element={<EmpLC />} />
          <Route path="/login" element={<SimpleFormHooks />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
