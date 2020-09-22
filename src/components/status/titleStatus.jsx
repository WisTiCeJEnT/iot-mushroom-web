import React from "react";
import styled from "styled-components";
const StyledText = styled.div`
  width: 90%;
  align-self: center;
  text-align: center;
  font-size: 2em;
  color: white;
  letter-spacing: 1px;
  @media (max-width: 675px) {
    font-size: 1.5em;
  }
`;
const TitleStatus = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

export default TitleStatus;
