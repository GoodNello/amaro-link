import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="footer">
      <p>
        <b>
          <Link to="/howtouse">How To Use</Link>
        </b>
      </p>
      <p>
        <b>
          <Link to="/about-api">Extend via API</Link>
        </b>
      </p>
      <p>
        <b>
          <Link to="/changelog">0.3.0</Link> (Development Release)
        </b>
      </p>
      <p>
        <b>
          <a href="http://www.amaro.team/" className="footer__nodec">
            Amaro Team
          </a>
        </b>
      </p>
    </div>
  );
};
