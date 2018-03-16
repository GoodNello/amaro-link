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
          <p>
            Amaro Link exposes some API to create links through your
            application.
          </p>
          <p>
            If this application is still in a developing stage, this section is
            even more than that.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};
