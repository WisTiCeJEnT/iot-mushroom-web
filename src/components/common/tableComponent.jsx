import React, { Component } from "react";
import styled from "styled-components";
import PaginationComponent from "./paginationComponent";
import { paginate } from "../../utils/paginate";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableRow = styled(TableRow)`
  background-color: ${(props) =>
    props.data.indexOf(props.row) === 0 ? "greenyellow" : "none"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
  }
`;
class TableComponent extends Component {
  state = {
    currentPage: 1,
    rowPerPage: 4,
    data: [
      {
        name: "Date 1",
        humidity: 159,
        light: 6.0,
        temperature: 24,
        blabla: 4.0,
      },
      {
        name: "Date 2",
        humidity: 237,
        light: 9.0,
        temperature: 37,
        blabla: 4.3,
      },
      {
        name: "Date 3",
        humidity: 262,
        light: 16.0,
        temperature: 24,
        blabla: 6.0,
      },
      {
        name: "Date 4",
        humidity: 305,
        light: 3.7,
        temperature: 67,
        blabla: 4.3,
      },
      {
        name: "Date 5",
        humidity: 356,
        light: 16.0,
        temperature: 49,
        blabla: 3.9,
      },
      {
        name: "Date 6",
        humidity: 356,
        light: 16.0,
        temperature: 49,
        blabla: 3.9,
      },
      {
        name: "Date 7",
        humidity: 356,
        light: 16.0,
        temperature: 49,
        blabla: 3.9,
      },
      {
        name: "Date 8",
        humidity: 356,
        light: 16.0,
        temperature: 49,
        blabla: 3.9,
      },
      {
        name: "Date 9",
        humidity: 356,
        light: 16.0,
        temperature: 49,
        blabla: 3.9,
      },
      {
        name: "Date 10",
        humidity: 356,
        light: 16.0,
        temperature: 49,
        blabla: 3.9,
      },
    ],
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { data, currentPage, rowPerPage } = this.state;
    const test = [1, 2, 3];

    let showedData = paginate(data, currentPage, rowPerPage);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TableContainer style={{ width: "90%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Avg. Humidity (unit) &nbsp;</TableCell>
                <TableCell align="right">Avg. Light (unit)&nbsp;</TableCell>
                <TableCell align="right">
                  Avg. Temperature (unit)&nbsp;
                </TableCell>
                <TableCell align="right">Avg. blabla (unit)&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {showedData.map((row) => (
                <StyledTableRow data={this.state.data} row={row} key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.humidity}</TableCell>
                  <TableCell align="right">{row.light}</TableCell>
                  <TableCell align="right">{row.temperature}</TableCell>
                  <TableCell align="right">{row.blabla}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PaginationComponent
          rowPerPage={this.state.rowPerPage}
          totalRow={this.state.data.length}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default TableComponent;
