import React from "react";
import styled from "styled-components";
import { FlexRow } from "../sharedComponents";
import Button from "@material-ui/core/Button";
const StyledInst = styled(Button)`
  color: #ffffff;
  border: solid 2px whitesmoke;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  @media (max-width: 915px) {
    font-size: 0.75em;
    padding: 0.5rem;
  }
`;
const StyledToMainPage = styled(Button)`
  color: #ffffff;
  margin-left: 1rem;
  @media (max-width: 915px) {
    font-size: 0.9em;
  }
`;
const StyledBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #130f40;
  padding: 0.5rem 0rem;
`;
const AppBarComponent = ({ isLoggedIn, history }) => {
  return (
    <StyledBar>
      <StyledToMainPage
        onClick={() => {
          window.location = "./main";
        }}
      >
        STATUS PAGE
      </StyledToMainPage>
      <FlexRow>
        <StyledInst style={{ marginLeft: "1.5rem" }}>
          WATER STATUS : PROGRESSING...
        </StyledInst>
        <StyledInst
          style={{ margin: "0rem 1rem" }}
          onClick={() => {
            history.push("./history");
          }}
        >
          HISTORY
        </StyledInst>
        {isLoggedIn ? (
          <FlexRow>
            <StyledInst
              onClick={() => {
                window.location = "./control";
              }}
            >
              WATER CONTROLLER
            </StyledInst>
            <StyledInst
              style={{
                border: "solid 3px #ff7979",
                color: "#ff7979",
                margin: "0rem 1.5rem",
              }}
              onClick={() => {
                localStorage.removeItem("token");
                window.location = "./login";
              }}
            >
              LOGOUT
            </StyledInst>
          </FlexRow>
        ) : (
          <StyledInst
            style={{ margin: "0rem 1.5rem 0rem 0rem" }}
            onClick={() => {
              window.location = "./login";
            }}
          >
            Login
          </StyledInst>
        )}
      </FlexRow>
    </StyledBar>
  );
};

export default AppBarComponent;
