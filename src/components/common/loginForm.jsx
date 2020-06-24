import React, { Component } from "react";
import styled from "styled-components";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Input,
} from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errorsStatus: { username: false, password: false },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errorsStatus = { ...this.state.errorsStatus };
    console.log(errorsStatus);
    if (this.state.account.username !== "juitanya")
      errorsStatus.username = true;
    if (this.state.account.password !== "123456") errorsStatus.password = true;
    this.setState({ errorsStatus });
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ account });
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
        <TextField
          autoFocus
          required
          error={this.state.errorsStatus.username}
          variant="outlined"
          value={this.state.account.username}
          onChange={this.handleChange}
          id="username"
          label={
            this.state.errorsStatus.username || this.state.errorsStatus.password
              ? "Invalid Username or Password"
              : "Username"
          }
        />
        <TextField
          required
          error={this.state.errorsStatus.password}
          variant="outlined"
          value={this.state.account.password}
          onChange={this.handleChange}
          id="password"
          label={
            this.state.errorsStatus.username || this.state.errorsStatus.password
              ? "Invalid Username or Password"
              : "Password"
          }
          style={{ margin: "1rem 0  0" }}
        />
        <Button
          type="submit"
          startIcon={<VpnKeyIcon />}
          color="primary"
          variant="contained"
          style={{ margin: "1rem 0  0", width: "50%", alignSelf: "center" }}
        >
          LOGIN
        </Button>
      </form>
    );
  }
}

export default LoginForm;
