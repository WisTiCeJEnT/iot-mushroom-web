import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "../components/common/loginForm";
import Mushroom from "../assets/images/mushroom.svg";
import Grass from "../assets/images/grass.svg";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import PageviewIcon from "@material-ui/icons/Pageview";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const StyledBackGround = styled.div`
  display: flex;
  margin: 7rem 0;
  align-items: center;
  justify-content: center;
`;
const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  align-items: center;
  justify-content: center;
  padding: 4rem 5rem;
  border: #ffff solid 2px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
const StyledMushroomImg = styled.img`
  width: 75px;
  height: 75px;
`;
class Login extends Component {
  state = { isLoggedIn: false };
  componentWillReceiveProps({ isLoggedIn }) {
    this.setState({ isLoggedIn });
  }
  redirectToStatusPage = () => {
    window.location = "./main";
  };
  render() {
    return !this.state.isLoggedIn ? (
      <StyledBackGround>
        <StyledContentBox>
          <div style={{ display: "flex" }}>
            <StyledMushroomImg src={Mushroom} />
            <StyledMushroomImg
              src={Grass}
              style={{
                width: "20px",
                paddingTop: "1rem",
              }}
            />
          </div>
          <Typography style={{ fontSize: "1.5em" }}>Sign In</Typography>
          <LoginForm />
          <Typography style={{ margin: "1rem 0" }}>OR</Typography>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<PageviewIcon />}
            onClick={() => {
              window.location = "./main";
            }}
          >
            GO TO STATUS PAGE
          </Button>
        </StyledContentBox>
      </StyledBackGround>
    ) : (
      this.redirectToStatusPage()
    );
  }
}

export default Login;
