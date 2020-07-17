import React, { Component } from "react";
import TableComponent from "../components/common/tableComponent";
import ChartComponent from "../components/common/chartComponent";
import withHeader from "../hoc/withHeader";
class History extends Component {
  render() {
    return (
      <div>
        <ChartComponent />
        <TableComponent />
      </div>
    );
  }
}
export default withHeader(History);
