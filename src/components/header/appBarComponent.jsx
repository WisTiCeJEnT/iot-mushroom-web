import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { FlexRow } from "../sharedComponents";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
const AppBarComponent = ({ props }) => {
  return (
    <AppBar
      position="sticky"
      style={{
        background: "#e1b382",
      }}
    >
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}>
          <Button
            style={{ color: "#ffffff" }}
            onClick={() => {
              window.location = "./main";
            }}
          >
            MUSHROOM PROJECT
          </Button>
        </Typography>
        <FlexRow
          style={{
            margin: "0rem 3rem",
            border: "solid 2px whitesmoke",
            padding: "0rem 1rem",
            borderRadius: "1rem",
          }}
        >
          <p>WATER STATUS : PROGRESSING...</p>
        </FlexRow>
        <Button
          style={{
            color: "#ffffff",
            border: "solid 2px whitesmoke",
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
          }}
          onClick={() => {
            props.history.push("./history");
          }}
        >
          HISTORY
        </Button>
        {props.isLoggedIn ? (
          <FlexRow style={{ margin: "0rem 0rem 0rem 3rem" }}>
            <p>WATER CONTROLLER : </p>
            <Button
              style={{
                border: "greenyellow solid 3px",
                margin: "0rem 1rem",
                borderRadius: "1rem",
              }}
            >
              ON
            </Button>
            <Button style={{ border: "red solid 3px", borderRadius: "1rem" }}>
              OFF
            </Button>
            <p style={{ marginLeft: "3rem", marginRight: "3rem" }}>
              LOGGED IN AS : Juitanya
            </p>
            <Button style={{ border: "red solid 3px", borderRadius: "1rem" }}>
              LOGOUT
            </Button>
          </FlexRow>
        ) : (
          <Button
            style={{ color: "#ffffff", marginLeft: "3rem" }}
            onClick={() => {
              window.location = "./login";
            }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
