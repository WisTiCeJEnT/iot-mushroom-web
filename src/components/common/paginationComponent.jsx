import React, { Component } from "react";
import _ from "lodash";
import Pagination from "@material-ui/lab/Pagination";

class PaginationComponent extends Component {
  render() {
    const { totalRow, rowPerPage, onPageChange } = this.props;
    const paginationCount = Math.ceil(totalRow / rowPerPage);
    return (
      <Pagination
        style={{ marginTop: "1rem" }}
        count={paginationCount}
        onChange={(event, page) => {
          onPageChange(page);
        }}
      />
    );
  }
}

export default PaginationComponent;
