import React from "react";
import styled from "styled-components";
import Alert from "../../components/alert";
import TitleStatus from "./titleStatus";
import ValueStatus from "./valueStatus";
import { BackGroundStatus } from "../../components/sharedComponents";

const DetailsBox = styled(BackGroundStatus)`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  overflow: hidden;
  @media (max-width: 1100px) {
    width: 40%;
  }
  @media (max-width: 975px) {
    width: 50%;
    margin-bottom: ${(props) => (props.text === "HUMIDITY" ? "2rem" : null)};
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
      fresh={type === "fresh"}
      moderate={type === "moderate"}
      danger={type === "danger"}
      text={text}
    >
      <TitleStatus text={text} />
      <ValueStatus value={value} unit={unit} />
      <Alert
        onAlert={onAlert}
        text={alertText}
        onOpenDialog={onOpenDialog}
        onCloseDialog={onCloseDialog}
        onWater={onWater}
      />
    </DetailsBox>
  );
};

export default StatusComponent;
