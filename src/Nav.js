import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="custom-navbar">
      <Link className="logo ms-3" to="/">
        🛒 Shopy
      </Link>

      <div className="nav-links">
        <ul>
          <li>
            <Link className="nav-link" to="/productlist">
              Products
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/aboutme">
              AboutMe
            </Link>
          </li>
          <li>
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
