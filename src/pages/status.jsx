import React from "react";
import styled from "styled-components";
import "fontsource-roboto";
import withHeader from "../hoc/withHeader";
import Title from "../components/status/title";
import WaterControl from "../components/status/waterControl";
import HistoryArea from "../components/status/historyArea";
import { FlexRow } from "../components/sharedComponents";
import Divider from "@material-ui/core/Divider";
import StatusComponent from "../components/status/statusComponent";
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const StatusBlock = styled(FlexRow)`
  justify-content: space-around;
  padding: 1.5rem 10rem 1rem 10rem;
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
      </StatusBlock>
      <FlexRow style={{ justifyContent: "center" }}>
        <Divider style={{ margin: "1rem 0", width: "90%" }} />
      </FlexRow>
      <div>
        <Title text="Configure Water ON/OFF" />
        <WaterControl status="loading" />
      </div>
      <FlexRow style={{ justifyContent: "center" }}>
        <Divider style={{ margin: "3rem 0", width: "90%" }} />
      </FlexRow>
      <HistoryArea />
    </ContentBox>
  );
};

export default withHeader(Status);
