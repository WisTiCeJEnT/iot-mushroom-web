import React from "react";
import styled from "styled-components";
import { Button, FlexRow, Spinner } from "../sharedComponents";
const WaterControlBox = styled(FlexRow)`
  justify-content: space-around;
  align-items: center;
  height: 40%;
`;

const StyledButton = styled(Button)`
  width: 40%;
  height: 30%;
`;
const WaterControl = () => {
  return (
    <WaterControlBox>
      <StyledButton>
        <span>WATER ON/OFF</span> <Spinner />
      </StyledButton>
    </WaterControlBox>
  );
};

export default WaterControl;
