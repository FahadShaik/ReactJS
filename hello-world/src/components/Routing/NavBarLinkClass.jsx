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
            <Link to="/index" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              Service
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarLinkClass;
