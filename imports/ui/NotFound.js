import React from "react";
import { Link } from "react-router-dom";

import Footer from "./partials/Footer";
import Header from "./partials/Header";
import ErrorDisplay from "./partials/ErrorDisplay";

export default props => {
  const code = props.match.params.code;
  let isNumber = false;

  if (!isNaN(code)) {
    isNumber = true;
  }

  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <Header />

        <h2>404</h2>

        <p>We are unable to find that page.</p>

        {isNumber ? (
          <ErrorDisplay error="No URL with that code has been found." />
        ) : (
          undefined
        )}

        <p>
          <Link to="/" className="button button--link">
            Go back home?
          </Link>
        </p>

        <Footer showLess={true} />
      </div>
    </div>
  );
};
