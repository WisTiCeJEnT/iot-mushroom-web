import React, { Component } from "react";
import { Spinner } from "../sharedComponents";
import { Button, Input } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    required: {
      username: false,
      password: false,
    },
    errorMessage: "",
    isLoading: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateRequiredField()) {
      this.setState({ isLoading: !this.state.isLoading });
      setTimeout(() => {
        this.setState({ isLoading: !this.state.isLoading });
        window.location = "./iot-mushroom-web/status";
      }, 2000);
    }
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ account });
  };
  validateRequiredField = () => {
    const requiredList = Object.keys({ ...this.state.account });
    const toSet = { ...this.state.required };
    requiredList.map((v) => {
      if (this.state.account[v]) {
        toSet[v] = false;
      } else {
        toSet[v] = true;
      }
    });
    this.setState({ required: toSet });
    const requiredStatus = Object.values({ ...toSet });
    if (requiredStatus.includes(true)) {
      this.setState({ errorMessage: "Please complete the required field." });
      return false;
    } else {
      this.setState({ errorMessage: "" });
      return true;
    }
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
        }}
      >
        <Input
          autoFocus
          value={this.state.account.username}
          onChange={this.handleChange}
          placeholder="Username"
          id="username"
        />
        <Input
          value={this.state.account.password}
          onChange={this.handleChange}
          placeholder="Password"
          id="password"
          type="password"
          style={{ margin: "1rem 0  0" }}
        />
        {this.state.errorMessage ? (
          <p style={{ color: "red" }}>* {this.state.errorMessage}</p>
        ) : (
          <p style={{ display: "none" }}></p>
        )}
        {this.state.isLoading ? (
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{
              margin: "2rem 0  0",
              width: "50%",
              height: "2.3rem",
              alignSelf: "center",
            }}
          >
            <Spinner
              style={{
                borderBottom: "2px solid white",
                borderTop: "transparent",
                borderLeft: "2px solid white",
                width: "1.2rem",
                height: "1.2rem",
              }}
            />
          </Button>
        ) : (
          <Button
            type="submit"
            startIcon={<VpnKeyIcon />}
            color="primary"
            variant="contained"
            style={{
              margin: "2rem 0  0",
              width: "50%",
              height: "2.3rem",
              alignSelf: "center",
            }}
          >
            LOGIN
          </Button>
        )}
      </form>
    );
  }
}

export default LoginForm;
