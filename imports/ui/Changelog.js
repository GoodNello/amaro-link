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
            <h3>0.3</h3>
            <ul>
              <li>
                <b>.0-alpha4</b> Merged fixes from v0.2.4
              </li>
              <li>
                <b>.0-alpha3</b> Initial API support (POST)
              </li>
              <li>
                <b>.0-alpha2</b> Initial API support (GET)
              </li>
              <li>
                <b>.0-alpha1</b> Refactored code
              </li>
            </ul>
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
};
