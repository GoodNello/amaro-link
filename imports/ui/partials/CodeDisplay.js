import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div>
      <p>Your Code: {props.code}</p>
      <p>
        Access your link faster using <code>amaro.link/{props.code}</code>
      </p>
    </div>
  );
};
