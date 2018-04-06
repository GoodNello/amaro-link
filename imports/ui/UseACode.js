import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import React from "react";
import { Link } from "react-router-dom";
import PinInput from "react-pin-input";

import { Links } from "../api/links";

import Footer from "./partials/Footer";
import Header from "./partials/Header";
import ErrorDisplay from "./partials/ErrorDisplay";

export default class UseACode extends React.Component {
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <Header />

          <span>
            <p>Access long links on your devices without any struggle.</p>
          </span>

          <div className="boxed-view__pininput">
            <PinInput
              length={4}
              focus
              type="numeric"
              ref="code"
              onComplete={(value, index) => {
                window.location.href = "/" + value;
              }}
            />
          </div>

          <p>
            <b>Tip:</b> you can also add /yourcode to the url in the address bar
            to directly access your link
          </p>

          <p>
            <Link to="/getcode" className="button button--link">
              Need a code?
            </Link>
          </p>

          <Footer />
        </div>
      </div>
    );
  }
}
