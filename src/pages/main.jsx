import React, { Component } from "react";
import styled from "styled-components";
import "fontsource-roboto";
import withHeader from "../hoc/withHeader";
import Title from "../components/status/title";
import WaterControl from "../components/status/waterControl";
import HistoryArea from "../components/status/historyArea";
import {
  FlexRow,
  CenterDivider,
  RotateRefreshIcon,
} from "../components/sharedComponents";

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
class Main extends Component {
  state = { openDialog: false, refresh: false, isLoggedIn: false };
  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  };

  handleAlert = (type) => {
    this.setState({ openDialog: !this.state.openDialog });
    console.log("ALERT", type);
  };
  handleWater = () => {
    console.log("WATER !");
  };
  handleRefreshData = () => {
    this.setState({ refresh: !this.state.refresh });
    console.log("REFRESH !");
  };

  componentWillReceiveProps({ isLoggedIn }) {
    this.setState({ isLoggedIn });
  }
  render() {
    const { refresh, openDialog, isLoggedIn } = this.state;
    return (
      <ContentBox>
        <Title text="Environments Status"></Title>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <RotateRefreshIcon
            onClick={this.handleRefreshData}
            rotate={refresh}
          />
          {refresh ? (
            <p> WAITING DATA FROM SERVER ...</p>
          ) : (
            <p> Refresh Data</p>
          )}
        </div>
        <StatusBlock>
          <StatusComponent
            type={"fresh"}
            text={"HUMIDITY"}
            value={"105.2"}
            unit={"humidity unit"}
            onAlert={() => this.handleAlert("humid")}
            alertText={"HUMIDITY WARNING !"}
            onOpenDialog={openDialog}
            onCloseDialog={this.handleCloseDialog}
            onWater={this.handleWater}
          />
          <StatusComponent
            type={"moderate"}
            text={"TEMPERATURE"}
            value={"38.4"}
            unit={"Celcius"}
            onAlert={() => this.handleAlert("temp")}
            alertText={"TEMPERATURE WARNING !"}
            onOpenDialog={openDialog}
            onCloseDialog={this.handleCloseDialog}
            onWater={this.handleWater}
          />
          <StatusComponent
            type={"danger"}
            text={"LIGHT"}
            value={"351.0"}
            unit={"light unit"}
            onAlert={() => this.handleAlert("light")}
            alertText={"LIGHT WARNING !"}
            onOpenDialog={openDialog}
            onCloseDialog={this.handleCloseDialog}
            onWater={this.handleWater}
          />
        </StatusBlock>
        <CenterDivider margin="2rem 0 0 0" />
        <div>
          <Title text="Configure Water ON/OFF" />
          <WaterControl status="loading" />
        </div>
        <CenterDivider margin="2rem 0" />
        <HistoryArea {...this.props} />
        <CenterDivider margin="2rem 0 4rem 0" />
      </ContentBox>
    );
  }
}

export default withHeader(Main);
