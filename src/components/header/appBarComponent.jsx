import React from "react";
import styled from "styled-components";
import { FlexRow } from "../sharedComponents";
import Button from "@material-ui/core/Button";
const StyledInst = styled(Button)`
  color: #ffffff;
  border: solid 2px whitesmoke;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
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
      <Button
        style={{ color: "#ffffff", marginLeft: "1rem" }}
        onClick={() => {
          window.location = "./main";
        }}
      >
        MUSHROOM PROJECT
      </Button>
      <FlexRow>
        <StyledInst>WATER STATUS : PROGRESSING...</StyledInst>
        <StyledInst
          style={{ margin: "0rem 1.5rem" }}
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
                history.push("./control");
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
                window.location = "./main";
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
