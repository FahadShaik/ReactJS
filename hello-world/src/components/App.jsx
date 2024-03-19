import NavBarLinkClass from "./Routing/NavBarLinkClass";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserLC from "./APICalls/UserLC";
import EmpLC from "./APICalls/EmpLC";
import SimpleForm from "./FormHandling/SimpleForm";
import BSForm from "./FormHandling/BSForm";

const App = () => {
  return (
    <div>
      <Router>
        <NavBarLinkClass />
        <Routes>
          <Route path="/contact" element={<BSForm />} />
          <Route path="/users" element={<UserLC />} />
          <Route path="/employees" element={<EmpLC />} />
          <Route path="/login" element={<SimpleForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
