import React from "react";
import { Link } from "react-router-dom";

import Footer from "./partials/Footer";
import Header from "./partials/Header";

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <Header />
        <div className="boxed-view_box_list">
          <span>
            <h3>0.3.0</h3>
            <ul>
              <li>
                New <Link to="/about-api">API support</Link> for GET and POST
                requests
              </li>
            </ul>
            <p>
              <b>
                <Link to="/development">Development and Known Issues</Link>
              </b>
            </p>
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
};
