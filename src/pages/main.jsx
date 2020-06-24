import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "../components/common/loginForm";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

import PageviewIcon from "@material-ui/icons/Pageview";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const StyledBackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1b382;
  width: 100vw;
  height: 100vh;
`;
const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: transparent;
  width: 50%;
  border: #ffff solid 2px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
class Main extends Component {
  render() {
    return (
      <StyledBackGround>
        <StyledContentBox>
          <Avatar style={{ backgroundColor: "#4245f5" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography style={{ margin: "0.5rem 0 0 0", fontSize: "1.25em" }}>
            Sign in
          </Typography>
          <LoginForm />
          <Typography style={{ margin: "1rem 0" }}>OR</Typography>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<PageviewIcon />}
            onClick={() => {
              window.location = "/status";
            }}
          >
            GO TO STATUS PAGE
          </Button>
        </StyledContentBox>
      </StyledBackGround>
    );
  }
}

export default Main;
