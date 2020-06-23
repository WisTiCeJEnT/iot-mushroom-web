import React from "react";
import styled from "styled-components";
import DialogComponent from "./dialogComponent";
import { WarningIcon } from "./sharedComponents";
const AlertBox = styled.div`
  overflow: hidden;
`;

const TextBox = styled.span`
  margin-left: 0.5rem;
  position: absolute;
  @media (max-width: 580px) {
    font-size: 0.9em;
  }
`;

const Alert = ({ onAlert, text, onOpenDialog, onCloseDialog, onWater }) => {
  return (
    <AlertBox>
      <WarningIcon onClick={onAlert} />
      <DialogComponent
        open={onOpenDialog}
        onClose={onCloseDialog}
        onWater={onWater}
      />
      <TextBox>{text}</TextBox>
    </AlertBox>
  );
};

export default Alert;
