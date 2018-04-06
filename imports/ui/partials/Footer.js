import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div className="footer">
      {props.showLess ? (
        undefined
      ) : (
        <div>
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
        </div>
      )}
      <p>
        <b>
          <Link to="/changelog">0.3.3</Link> (Development Release)
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
