import styled from "styled-components";
export const BackGroundColor = styled.div`
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
  width: 20%;
  height: 50%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
