import React from "react";
import styled from "styled-components";
import "fontsource-roboto";
import TypoGraphy from "@material-ui/core/Typography";
import { Button, FlexRow, Spinner } from "../sharedComponents";
const WaterControlBox = styled(FlexRow)`
  justify-content: space-around;
  align-items: center;
  height: 40%;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  width: 40%;
  height: 30%;
`;
const WaterControl = () => {
  return (
    <WaterControlBox>
      <StyledButton>
        <TypoGraphy>WATER ON/OFF</TypoGraphy> <Spinner />
      </StyledButton>
    </WaterControlBox>
  );
};

export default WaterControl;
