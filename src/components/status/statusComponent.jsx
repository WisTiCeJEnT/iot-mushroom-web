import React from "react";
import styled, { keyframes } from "styled-components";
import Alert from "../../components/alert";
import TitleStatus from "./titleStatus";
import ValueStatus from "./valueStatus";
import { BackGroundStatus, shake } from "../../components/sharedComponents";

const DetailsBox = styled(BackGroundStatus)`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(#341f97 95%, rgba(127, 113, 248, 1) 100%);
  box-shadow: 0px 0px 10px #0abde3;
  overflow: hidden;
  animation: ${shake} 1.5s;
  @media (max-width: 1185px) {
    width: 30%;
  }
  @media (max-width: 1025px) {
    width: 45%;
    margin: ${(props) => (props.text === "TEMPERATURE" ? "2rem" : null)};
  }
  @media (max-width: 750px) {
    width: 70%;
    margin: ${(props) => (props.text === "TEMPERATURE" ? "2rem" : null)};
  }
  @media (max-width: 600px) {
    width: 85%;
    margin: ${(props) => (props.text === "TEMPERATURE" ? "2rem" : null)};
  }
`;
const StatusComponent = ({
  type,
  text,
  onAlert,
  alertText,
  value,
  unit,
  onOpenDialog,
  onCloseDialog,
  onWater,
}) => {
  return (
    <DetailsBox
      //   fresh={type === "fresh"}
      //   moderate={type === "moderate"}
      //   danger={type === "danger"}
      text={text}
    >
      <TitleStatus text={text} />
      <ValueStatus value={value} unit={unit} />
      {/* <Alert
        onAlert={onAlert}
        text={alertText}
        onOpenDialog={onOpenDialog}
        onCloseDialog={onCloseDialog}
        onWater={onWater}
      /> */}
    </DetailsBox>
  );
};

export default StatusComponent;
