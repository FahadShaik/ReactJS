import { Link } from "react-router-dom";
import React from "react";

const NavBarLinkClass = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Logo
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li>
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li>
            <Link to="/employees" className="nav-link">
              Employees
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarLinkClass;
