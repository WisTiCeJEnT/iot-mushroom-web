import React, { Component } from "react";
import { Link } from "react-router-dom";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>THIS IS MAIN PAGE</h2>
        <Link to="/status">GO TO STATUS PAGE</Link>
      </React.Fragment>
    );
  }
}

export default Main;
