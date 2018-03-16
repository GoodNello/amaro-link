import React from "react";

import { Links } from "../../api/links";

import ErrorDisplay from "./ErrorDisplay";
import CodeDisplay from "./CodeDisplay";

export default class GetCodeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      code: 0,
      error: "",
      url: ""
    };
  }
  onSubmit(e) {
    e.preventDefault();

    const { url } = this.state;

    if (url) {
      Meteor.call("links.insert", url, (err, res) => {
        if (err) {
          this.setState({
            error: err.message,
            url: ""
          });
        } else {
          this.setState({
            error: "Code created.",
            url: "",
            code: res
          });
        }
      });
    }
  }
  onChange(e) {
    this.setState({
      url: e.target.value
    });
  }
  render() {
    return (
      <div>
        {this.state.error ? (
          <ErrorDisplay error={this.state.error} />
        ) : (
          undefined
        )}
        {this.state.code ? <CodeDisplay code={this.state.code} /> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
          <input
            type="text"
            placeholder="URL"
            value={this.state.url}
            onChange={this.onChange.bind(this)}
          />
          <button className="button" type="submit">
            Go!
          </button>
        </form>

        <p>
          <b>Note:</b> as of now you need to prepend http, https or ftp to your
          url
        </p>
      </div>
    );
  }
}
