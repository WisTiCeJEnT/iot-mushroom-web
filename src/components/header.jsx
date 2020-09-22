import React, { Component } from "react";
import AppBarComponent from "../components/header/appBarComponent";
import CssBaseline from "@material-ui/core/CssBaseline";
class Header extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <AppBarComponent isLoggedIn={this.props.isLoggedIn} {...this.props} />
      </div>
    );
  }
}

export default Header;
