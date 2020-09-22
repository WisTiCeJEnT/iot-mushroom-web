import React, { Component } from "react";
import Header from "../components/header";
import TableComponent from "../components/common/tableComponent";
import ChartComponent from "../components/common/chartComponent";
class History extends Component {
  state = { isLoggedIn: false };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "whiteTheme";
  }
  componentWillReceiveProps({ isLoggedIn }) {
    this.setState({ isLoggedIn });
  }
  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} {...this.props} />
        <div>
          <ChartComponent />
          <TableComponent />
        </div>
      </div>
    );
  }
}
export default History;
