import React from "react";
import { Link } from "react-router-dom";
import PinInput from "react-pin-input";

import { Links } from "../../api/links";

export default class Jumbotron extends React.Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h3 className="display-10">
            Access long links on your devices without any struggle.
          </h3>
          <p>Do you have a code? Insert it below.</p>
          <PinInput
            length={4}
            type="numeric"
            ref="code"
            onChange={(value, index) => {
              if (index === 3) {
                Meteor.subscribe("links");
              }
            }}
            onComplete={(value, index) => {
              const link = Links.findOne({ code: value });

              if (link) {
                window.location.href = link.url;
              } else {
                this.setState({
                  error: "Sorry, either the code is wrong or expired."
                });
                this.refs.code.clear();
              }
            }}
          />
          <p className="pt-3">
            <b>Tip:</b> you can also add /yourcode to the url in the address bar
            to directly access your link
          </p>
          <p>Thank you for keeping part of the development!</p>
        </div>
      </div>
    );
  }
}
