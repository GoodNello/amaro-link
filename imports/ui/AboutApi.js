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
            Amaro Link exposes some API to create and retrieve links through
            your own application.
          </p>
          <p>
            By using <code>http://www.amaro.link/api/link</code> you can send
            GET and POST requests to save a link or retrieve one via code.
          </p>
          <p>POST requests comply to the application limits.</p>
          <p>
            <a href="https://pastebin.com/exgtSSuP">
              See some examples using Meteor's HTTP package.
            </a>
          </p>
          <p>
            To request an API key, please{" "}
            <a href="mailto:giulio@amaro.team">contact me</a>.
          </p>
        </div>
        <Footer showLess={true} />
      </div>
    </div>
  );
};
