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
            <h3>1.0</h3>
            <ul>
              <li>Added limit for code creation</li>
              <li>Limited app to only have 9999 links saved</li>
              <li>Codes now expire after 20 minutes</li>
            </ul>
            <p>Patch releases are listed on GitHub.</p>
            <p>
              <b>
                <Link to="/development">Development and Known Issues</Link>
              </b>
            </p>
          </span>
        </div>
        <Footer showLess={true} />
      </div>
    </div>
  );
};
