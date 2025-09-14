import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <Link className="navbar-brand logo ms-3" to="/">
        🛒 Shopy
      </Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/productlist">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutme">
              AboutMe
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link logout-link" to="/login">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
