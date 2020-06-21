import React from "react";
import styled, { keyframes } from "styled-components";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import DialogComponent from "./DialogComponent";
const AlertBox = styled.div`
  overflow: hidden;
`;
const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
`;
const WarningIcon = styled(ErrorOutlineOutlinedIcon)`
  color: orangered;
  cursor: pointer;
  animation: ${shake} 0.5s;
  animation-iteration-count: infinite;
  :hover {
    animation: none;
  }
`;
const TextBox = styled.span`
  margin-left: 0.5rem;
  position: absolute;
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
