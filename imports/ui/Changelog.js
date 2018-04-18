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
            <p>
              Amaro Link is a project made by GoodNello. Its code is available
              on <a href="https://github.com/GoodNello/amaro-link">GitHub</a>.
            </p>
          </span>
          <span>
            <h3>1.0</h3>
            <ul>
              <li>Limited app to only have 9999 links saved</li>
              <li>Codes now expire after 20 minutes</li>
              <li>Removed /development component</li>
            </ul>
          </span>
          <span>
            <p>
              Issues are listed{" "}
              <a href="https://github.com/GoodNello/amaro-link/issues">here</a>.
            </p>
          </span>
        </div>
        <Footer showLess={true} />
      </div>
    </div>
  );
};
