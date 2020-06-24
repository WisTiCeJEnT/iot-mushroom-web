import React from "react";
import styled from "styled-components";
import "fontsource-roboto";
import withHeader from "../hoc/withHeader";
import Title from "../components/status/title";
import WaterControl from "../components/status/waterControl";
import HistoryArea from "../components/status/historyArea";
import { FlexRow, CenterDivider } from "../components/sharedComponents";

import StatusComponent from "../components/status/statusComponent";
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const StatusBlock = styled(FlexRow)`
  justify-content: space-around;
  padding: 1.5rem 10rem 1rem 10rem;
  @media (max-width: 1400px) {
    padding: 1rem 4rem 1rem 4rem;
  }

  @media (max-width: 1025px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Status = (props) => {
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
      <Title text="Environments Status" />
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
        <StatusComponent
          type={"danger"}
          text={"LIGHT"}
          value={"351.0"}
          unit={"light unit"}
          onAlert={() => handleAlert("light")}
          alertText={"LIGHT WARNING !"}
          onOpenDialog={openDialog}
          onCloseDialog={handleCloseDialog}
          onWater={handleWater}
        />
      </StatusBlock>
      <CenterDivider margin="2rem 0 0 0" />
      <div>
        <Title text="Configure Water ON/OFF" />
        <WaterControl status="loading" />
      </div>
      <CenterDivider margin="2rem 0" />
      <HistoryArea {...props} />
      <CenterDivider margin="2rem 0 4rem 0" />
    </ContentBox>
  );
};

export default withHeader(Status);
