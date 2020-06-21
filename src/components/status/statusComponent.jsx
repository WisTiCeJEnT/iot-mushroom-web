import React from "react";
import styled from "styled-components";
import Alert from "../../components/alert";
import TitleStatus from "./titleStatus";
import ValueStatus from "./valueStatus";
import { BackGroundStatus } from "../../components/sharedComponents";
const DetailsBox = styled(BackGroundStatus)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 1rem;
  width: 40vmin;
  height: 100%;
  overflow: hidden;
  border: solid 2px red;
  @media (max-width: 975px) {
    width: 35vmin;
    height: 40%;
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
