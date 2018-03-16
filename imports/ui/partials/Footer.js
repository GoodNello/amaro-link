import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
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
          <Link to="/about-api">Experimental API</Link>
        </b>
      </p>
      <p>
        <b>
          <Link to="/changelog">0.3.0-alpha2</Link> (Development Release)
        </b>
      </p>
      <p>
        <b>Amaro Team ❤️☕</b>
      </p>
    </div>
  );
};
