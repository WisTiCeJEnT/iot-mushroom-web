import React from "react";
import styled from "styled-components";
import "fontsource-roboto";
// import Watering from "../../assets/icons/watering.svg";
import TypoGraphy from "@material-ui/core/Typography";
import {
  FlexRow,
  Spinner,
  ProgressIcon,
  OffIcon,
  OnIcon,
} from "../sharedComponents";

const WaterControlBox = styled(FlexRow)`
  justify-content: space-around;
  align-items: center;
`;
const StyledButton = styled.button`
  padding: 0 2rem 0 2rem;
  position: relative;
  cursor: ${(props) => (props.disabled ? null : "pointer")};
  width: 40%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.status === "auto"
      ? "#0c002b"
      : props.status === "on"
      ? "#3586ff"
      : props.status === "loading"
      ? "transparent"
      : props.status === "off"
      ? "black"
      : null};
  /* #00b23d */
  color: ${(props) =>
    props.status === "auto"
      ? "#1670f0"
      : props.status === "on"
      ? "#fff"
      : props.status === "loading"
      ? "#181a1c"
      : props.status === "off"
      ? "white"
      : null};
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  border: ${(props) =>
    props.status === "auto"
      ? "#solid 2px 1779ff"
      : props.status === "on"
      ? "solid 2px #fff"
      : props.status === "loading"
      ? "solid 2px #646956"
      : null};
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.02);
  }
`;
const StyledWaterStatus = styled(TypoGraphy)`
  letter-spacing: 1px;
  text-decoration: none;
  font-size: 1em;
  margin-right: 1rem;
  font-weight: bold;
`;
const StyledText = styled(TypoGraphy)`
  letter-spacing: 1px;
  text-decoration: none;
  font-size: 1em;
  margin-right: 1rem;
`;

const WaterControl = ({ status }) => {
  return (
    <WaterControlBox>
      <StyledButton status={status} disabled={status === "loading"}>
        <StyledWaterStatus>WATER STATUS: </StyledWaterStatus>
        <StyledText>
          {status === "loading"
            ? "PROGRESSING ..."
            : status === "on"
            ? "ON"
            : status === "off"
            ? "OFF"
            : status === "auto"
            ? "AUTOMATIC MODE"
            : null}
        </StyledText>
        {status === "loading" ? (
          //   <Spinner loading />
          <ProgressIcon />
        ) : status === "off" ? (
          <OffIcon />
        ) : status === "on" ? (
          <React.Fragment>
            <OnIcon />
            {/* <img src={Watering} style={{ width: "5%", marginLeft: "1rem" }} /> */}
          </React.Fragment>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </StyledButton>
    </WaterControlBox>
  );
};

export default WaterControl;
