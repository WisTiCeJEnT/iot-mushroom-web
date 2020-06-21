import React, { Component } from "react";
import { Link } from "react-router-dom";
class Main extends Component {
  state = { test: 4 };
  //   intervalId;
  //   componentDidMount() {
  //     this.intervalId = setInterval(this.getData, 1000);
  //     console.log(this.state.test);
  //   }
  //   componentWillUnmount() {
  //     console.log("clear");
  //     clearInterval(this.intervalId);
  //   }
  //   getData = () => {
  //     this.setState({ test: this.state.test + 1 });
  //     console.log("getting data...");
  //   };
  render() {
    // console.log(this.state.test);
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
