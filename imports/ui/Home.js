import React from "react";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Jumbotron from "./partials/Jumbotron";
import ThreeElements from "./partials/ThreeElements";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false
    };
  }
  render() {
    if (this.state.isUser) {
      return (
        <div>
          <Header isUser={this.state.isUser} />
          <Jumbotron />
          <ThreeElements />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header isUser={this.state.isUser} />
          <Jumbotron />
          <ThreeElements />
          <Footer />
        </div>
      );
    }
  }
}
