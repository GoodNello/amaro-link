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
            <h3>How To Use</h3>
            <p>
              Paste your link in the <Link to="/getcode">GetCode page</Link> and
              take note of the code.
            </p>
            <p>
              Access amaro.link on your device and enter the code to access the
              saved page or simply go to <code>amaro.link/yourcode</code>.
            </p>
          </span>
        </div>
        <Footer showLess={true} />
      </div>
    </div>
  );
};
