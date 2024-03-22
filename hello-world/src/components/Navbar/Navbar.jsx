import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Logo
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li>
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
