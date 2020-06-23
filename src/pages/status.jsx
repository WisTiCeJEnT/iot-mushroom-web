import React from "react";
import styled from "styled-components";
import "fontsource-roboto";
import withHeader from "../hoc/withHeader";
import WaterControl from "../components/status/waterControl";
import { FlexRow } from "../components/sharedComponents";
import Divider from "@material-ui/core/Divider";
import StatusComponent from "../components/status/statusComponent";
const ContentBox = styled.div`
  border: solid 2px red;
  display: flex;
  flex-direction: column;
`;
const StatusBlock = styled(FlexRow)`
  justify-content: space-around;
  padding: 1rem 10rem 1rem 10rem;
  @media (max-width: 1100px) {
    padding: 1rem 0rem 1rem 0rem;
  }
  @media (max-width: 975px) {
    flex-direction: column;
    align-items: center;
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
      <Divider style={{ margin: "1rem 0rem" }} />
      <WaterControl status="loading" />
      <Divider />
    </ContentBox>
  );
};

export default withHeader(Status);
