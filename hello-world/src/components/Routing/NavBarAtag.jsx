import React, { Component } from "react";

class NavBarAtag extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
          <a href="/" className="navbar-brand">
            Logo
          </a>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li>
                <a href="/index" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="nav-link">
                  Service
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBarAtag;
