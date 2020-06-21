import React from "react";
import styled from "styled-components";
import "fontsource-roboto";
import withHeader from "../hoc/withHeader";
import WaterControl from "../components/status/waterControl";
import { FlexRow } from "../components/sharedComponents";
import Divider from "@material-ui/core/Divider";
import StatusComponent from "../components/status/statusComponent";
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const StatusBlock = styled(FlexRow)`
  height: 60%;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 10rem 1rem 10rem;
  @media (max-width: 1230px) {
    padding: 1rem 2rem 1rem 2rem;
  }
  @media (max-width: 975px) {
    height: 100vh;
    flex-direction: column;
  }
`;

const Status = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleAlert = (type) => {
    setOpenDialog(!openDialog);
    console.log("ALERT", type);
  };
  const handleWater = () => {
    console.log("WATER !");
  };
  return (
    <ContentBox>
      <StatusBlock>
        <StatusComponent
          type={"fresh"}
          text={"HUMIDITY"}
          value={"105.2"}
          unit={"humidity unit"}
          onAlert={() => handleAlert("humid")}
          alertText={"HUMIDITY WARNING !"}
          onOpenDialog={openDialog}
          onCloseDialog={handleCloseDialog}
          onWater={handleWater}
        />
        <StatusComponent
          type={"moderate"}
          text={"TEMPERATURE"}
          value={"38.4"}
          unit={"Celcius"}
          onAlert={() => handleAlert("temp")}
          alertText={"TEMPERATURE WARNING !"}
          onOpenDialog={openDialog}
          onCloseDialog={handleCloseDialog}
          onWater={handleWater}
        />
      </StatusBlock>
      <Divider />
      <WaterControl />
      <Divider />
      <FlexRow>
        {/* <button
          style={{
            width: "20%",
            height: "50%",
            border: "solid green 2px",
          }}
        >
          DASHBOARD
        </button> */}
      </FlexRow>
    </ContentBox>
  );
};

export default withHeader(Status);
