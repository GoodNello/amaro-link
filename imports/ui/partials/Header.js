import React from "react";
import { Link } from "react-router-dom";

import User from "./header/User";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-background">
          <Link className="navbar-brand" to="/">
            <span className="white-text">Amaro Link</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img className="user-icon" src="/images/icons/user.svg" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <User isUser={this.props.isUser} />
          </div>
        </nav>
      </header>
    );
  }
}
