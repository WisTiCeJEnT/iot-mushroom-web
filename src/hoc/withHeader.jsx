import React from "react";
import AppBarComponent from "../components/header/appBarComponent";
import CssBaseline from "@material-ui/core/CssBaseline";

function withHeader(Component) {
  return function WithHeader(props) {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBarComponent props={props} />
        <Component {...props} />
        {/* main content */}
      </React.Fragment>
    );
  };
}

export default withHeader;
