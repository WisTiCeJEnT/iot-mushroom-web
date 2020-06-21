import styled, { keyframes } from "styled-components";
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  margin-left: 1rem;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 2px solid transparent;
  background: transparent;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;
export const Button = styled.button``;
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
    transform: scale(1.1);
  }
`;
