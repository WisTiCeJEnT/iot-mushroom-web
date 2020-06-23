import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledText = styled(Typography)`
  color: #7c795d;
  font-family: "Trocchi";
  font-size: 2.5em;
  font-weight: normal;
`;
const Title = ({ text }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <StyledText nowrap={true}>{text}</StyledText>
    </div>
  );
};

export default Title;
