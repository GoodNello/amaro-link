import React from "react";

export default props => {
  if (props.isUser) {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="white-text">Account</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="white-text">Logout</span>
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="white-text">Login</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="white-text">Register</span>
          </a>
        </li>
      </ul>
    );
  }
};
