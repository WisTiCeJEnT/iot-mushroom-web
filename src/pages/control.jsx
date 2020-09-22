import React, { Component } from "react";
import { FlexRow } from "../components/sharedComponents";
import styled from "styled-components";
import Header from "../components/header";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Typography } from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import OpacityIcon from "@material-ui/icons/Opacity";
import CloseIcon from "@material-ui/icons/Close";
import BuildIcon from "@material-ui/icons/Build";
const Splitter = styled.div`
  border-top: solid 2px gray;
  width: 4rem;
  height: 4rem;
  opacity: 0.5;
  transform: rotate(90deg);
`;
class Control extends Component {
  state = {
    isLoggedIn: false,
    openAutoMode: false,
    openManualMode: false,
    loading: false,
  };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "whiteTheme";
  }
  componentWillReceiveProps({ isLoggedIn }) {
    this.setState({ isLoggedIn });
  }
  handleConfig = (type) => {
    this.setState({ loading: !this.state.loading });
    console.log(type);
  };
  render() {
    return this.state.isLoggedIn ? (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} {...this.props} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "12rem",
          }}
        >
          <Typography style={{ fontSize: "2em", marginBottom: "2rem" }}>
            Select Watering Mode
          </Typography>
          {!(this.state.openAutoMode || this.state.openManualMode) ? (
            <FlexRow>
              <Button
                startIcon={<TouchAppIcon />}
                variant="contained"
                style={{
                  background: "#01a3a4",
                  color: "white",
                }}
                onClick={() => {
                  this.setState({ openManualMode: !this.state.openManualMode });
                }}
              >
                MANUAL
              </Button>
              <Button
                startIcon={<AutorenewIcon />}
                color="primary"
                variant="contained"
                style={{ marginLeft: "4rem", background: "#f368e0" }}
                onClick={() => {
                  this.setState({ openAutoMode: !this.state.openAutoMode });
                }}
              >
                AUTO
              </Button>
            </FlexRow>
          ) : this.state.openManualMode ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                startIcon={<TouchAppIcon />}
                color="primary"
                variant="contained"
                style={{
                  background: "#01a3a4",
                  alignSelf: "center",
                  marginBottom: "3rem",
                }}
                onClick={() => {
                  this.setState({ openManualMode: !this.state.openManualMode });
                }}
              >
                MANUAL
              </Button>
              <FlexRow>
                <Button
                  startIcon={<CloseIcon />}
                  disabled={this.state.loading}
                  style={{
                    background: this.state.loading ? "gray " : "#ff4757",
                    color: "white",
                    alignSelf: "center",
                  }}
                  onClick={() => {
                    this.handleConfig("off");
                  }}
                >
                  {this.state.loading ? "Progressing..." : "OFF"}
                </Button>
                <Splitter />
                <Button
                  startIcon={<OpacityIcon />}
                  disabled={this.state.loading}
                  style={{
                    background: this.state.loading ? "gray " : "#0abde3",
                    marginLeft: "4rem",
                    color: "white",
                    alignSelf: "center",
                  }}
                  onClick={() => {
                    this.handleConfig("on");
                  }}
                >
                  {this.state.loading ? "Progressing..." : "ON"}
                </Button>
              </FlexRow>
            </div>
          ) : this.state.openAutoMode ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                startIcon={<AutorenewIcon />}
                color="primary"
                variant="contained"
                style={{
                  background: "#f368e0",
                  alignSelf: "center",
                  marginBottom: "3rem",
                }}
                onClick={() => {
                  this.setState({ openAutoMode: !this.state.openAutoMode });
                }}
              >
                AUTO
              </Button>
              <FlexRow>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Input disabled={this.state.loading} placeholder="Humidity">
                    Set Humidity
                  </Input>
                  <Button
                    startIcon={<BuildIcon />}
                    disabled={this.state.loading}
                    style={{
                      color: "white",
                      background: this.state.loading ? "gray " : "#ff6b6b",
                      alignSelf: "center",
                      marginTop: "1rem",
                    }}
                    onClick={() => {
                      this.handleConfig("humid");
                    }}
                  >
                    {this.state.loading ? "Progressing..." : "Confirm"}
                  </Button>
                </div>
                <Splitter />
                <Button
                  startIcon={<AutorenewIcon />}
                  disabled={this.state.loading}
                  style={{
                    color: "white",
                    background: this.state.loading ? "gray " : "purple",
                    alignSelf: "center",
                    marginLeft: "4rem",
                  }}
                  onClick={() => {
                    this.handleConfig("auto");
                  }}
                >
                  {this.state.loading ? "Progressing..." : "Automatic Mode"}
                </Button>
              </FlexRow>
            </div>
          ) : (
            <p style={{ display: "none" }}></p>
          )}
        </div>
      </div>
    ) : (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} {...this.props} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "12rem",
          }}
        >
          <Typography style={{ fontSize: "2em", marginBottom: "1rem" }}>
            Please Login
          </Typography>
          <Button
            startIcon={<VpnKeyIcon />}
            color="primary"
            variant="contained"
            onClick={() => {
              window.location = "./login";
            }}
          >
            LOGIN
          </Button>
        </div>
      </div>
    );
  }
}

export default Control;
