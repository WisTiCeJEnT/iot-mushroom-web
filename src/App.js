import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Main from "./pages/main";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import History from "./pages/history";

class App extends Component {
  state = {
    isLoggedIn: false,
  };
  componentDidMount() {
    const isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) this.setState({ isLoggedIn: true });
  }
  render() {
    console.log("app", this.state.isLoggedIn);
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/iot-mushroom-web/main"
            render={(props) => (
              <Main {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route
            path="/iot-mushroom-web/login"
            render={(props) => (
              <Login {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route
            path="/iot-mushroom-web/history"
            render={(props) => (
              <History {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route path="/iot-mushroom-web/not-found" component={NotFound} />
          <Redirect
            from="/iot-mushroom-web"
            exact
            to="/iot-mushroom-web/main"
          />
          <Redirect to="/iot-mushroom-web/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
