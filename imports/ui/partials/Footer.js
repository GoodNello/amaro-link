import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="footer">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="http://www.amaro.team/">
          Amaro Team
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavFooter"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavFooter">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about-api">
                Extend via API
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/changelog">
                0.4.0-alpha1
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
