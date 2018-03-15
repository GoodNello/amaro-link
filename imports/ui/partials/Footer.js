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
          <Link to="/development">Development and Known Issues</Link>
        </b>
      </p>
      <p>
        <b>
          <Link to="/changelog" className="footer__nodec">
            0.2.4 (Development Release)
          </Link>
        </b>
      </p>
      <p>
        <b>
          <a href="http://www.amaro.team/" className="footer__nodec">
            Amaro Team ❤️☕
          </a>
        </b>
      </p>
    </div>
  );
};
