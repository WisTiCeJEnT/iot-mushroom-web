import React from "react";
import styled from "styled-components";
const StyledText = styled.div`
  align-self: center;
  width: 90%;
  text-align: center;
  border: solid 2px red;
  font-size: 2em;
  letter-spacing: 1px;
  @media (max-width: 800px) {
    font-size: 1.2em;
  }
`;
const TitleStatus = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

export default TitleStatus;
