import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Title from "../components/status/title";
import WaterControl from "../components/status/waterControl";
import HistoryArea from "../components/status/historyArea";
import {
  FlexRow,
  CenterDivider,
  RotateRefreshIcon,
} from "../components/sharedComponents";
import { currentStatus } from "../services/api";

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
  state = {
    openDialog: false,
    refresh: false,
    isLoggedIn: false,
    currentStatus: { humidity: "-", temp: "-", light: "-" },
  };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "whiteTheme";
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    this.setState({ refresh: true });
    currentStatus(
      ({ data }) => {
        const currentStatus = { ...this.state.currentStatus };
        const avg_temp = (data.data.temp1 + data.data.temp2) / 2;
        const avg_light = (data.data.light1 + data.data.light2) / 2;
        currentStatus.humidity = data.data.humid_arv.toFixed(2);
        currentStatus.temp = avg_temp.toFixed(2);
        currentStatus.light = avg_light.toFixed(2);
        this.setState({ currentStatus, refresh: false });
      },
      (err) => {
        console.log("getValue error.");
      }
    );
  };
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
    this.getData();
  };

  componentWillReceiveProps({ isLoggedIn }) {
    this.setState({ isLoggedIn });
  }
  render() {
    const { refresh, openDialog, isLoggedIn } = this.state;
    return (
      <div>
        <Header isLoggedIn={isLoggedIn} {...this.props} />
        <ContentBox>
          <Title text="Environments Status"></Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <RotateRefreshIcon
              onClick={this.handleRefreshData}
              rotate={refresh}
            />
            {refresh ? (
              <p> Getting Data From Server ...</p>
            ) : (
              <p> Click for Refresh Data</p>
            )}
          </div>
          <StatusBlock>
            <StatusComponent
              type={"fresh"}
              text={"HUMIDITY"}
              value={this.state.currentStatus.humidity}
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
              value={this.state.currentStatus.temp}
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
              value={this.state.currentStatus.light}
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
      </div>
    );
  }
}

export default Main;
