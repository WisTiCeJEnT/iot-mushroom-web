import React, { Component } from "react";
import { Link } from "react-router-dom";
class Main extends Component {
  state = { test: 4 };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ test: 5 });
    }, 2000);
    console.log(this.state.test);
    setTimeout(() => {
      this.setState({ test: 6 });
    }, 2000);
    console.log(this.state.test);
  }
  render() {
    return (
      <React.Fragment>
        <h2>THIS IS MAIN PAGE</h2>
        <Link to="/status">GO TO STATUS PAGE</Link>
        <p>{this.state.test} </p>
      </React.Fragment>
    );
  }
}

export default Main;
