import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NotFoundIcon from "../assets/icons/notfound.svg";
const OutSideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NotFound = (props) => {
  return (
    <OutSideBox>
      <ContentBox>
        <img src={NotFoundIcon} style={{ width: "25vmax" }} />
        <Typography style={{ fontSize: "3vmax", margin: "2rem" }}>
          404 PAGE NOT FOUND
        </Typography>
        <Button
          color="default"
          variant="contained"
          onClick={() => {
            props.history.push("/");
          }}
        >
          BACK TO MAIN PAGE
        </Button>
      </ContentBox>
    </OutSideBox>
  );
};

export default NotFound;
