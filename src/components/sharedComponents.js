import styled, { keyframes } from "styled-components";
import CachedIcon from "@material-ui/icons/Cached";
import CancelIcon from "@material-ui/icons/Cancel";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  25% { transform: translate(-1px, -2px) rotate(-1deg); }
`;
export const WarningIcon = styled(ErrorOutlineOutlinedIcon)`
  color: orangered;
  cursor: pointer;
  animation: ${shake} 0.5s infinite;
  :hover {
    animation: none;
  }
`;
export const ProgressIcon = styled(CachedIcon)`
  animation: ${rotate360} 1.5s linear infinite;
`;
export const OffIcon = styled(CancelIcon)`
  animation: ${shake} 1.5s infinite;
  color: red;
`;
export const OnIcon = styled(CheckCircleOutlineIcon)`
  color: #fff;
  animation: ${shake} 1s infinite;
`;
export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  border-bottom: 2px solid blue;
  border-top: 2px solid greenyellow;
  border-left: 2px solid green;
  background: transparent;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;
export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${(props) =>
    props.fresh
      ? `radial-gradient(
    ellipse farthest-corner at 100% 0,
    #01ff70 5%,
    #ffffff 95%
  )`
      : props.moderate
      ? `radial-gradient(
    ellipse farthest-corner at 100% 0,
    #FFDC00 5%,
    #ffffff 95%
  )`
      : props.danger
      ? `radial-gradient(
    ellipse farthest-corner at 100% 0,
    #FF4136 5%,
    #ffffff 95%
  )`
      : null};
`;
export const BackGroundStatus = styled.div`
  background: ${(props) =>
    props.fresh
      ? `radial-gradient(
    ellipse farthest-corner at 100% 0,
    #01ff70 5%,
    #ffffff 95%
  )`
      : props.moderate
      ? `radial-gradient(
    ellipse farthest-corner at 100% 0,
    #FFDC00 5%,
    #ffffff 95%
  )`
      : props.danger
      ? `radial-gradient(
    ellipse farthest-corner at 100% 0,
    #FF4136 5%,
    #ffffff 95%
  )`
      : null};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;
