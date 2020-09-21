import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Main from "./pages/main";
import Status from "./pages/status";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
import History from "./pages/history";
const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/iot-mushroom-web/login" component={Login} />
        <Route path="/iot-mushroom-web/history" component={History} />
        <Route path="/iot-mushroom-web/status" component={Status} />
        <Route path="/iot-mushroom-web/not-found" component={NotFound} />
        <Route path="/iot-mushroom-web/main" component={Main} />
        <Redirect from="/iot-mushroom-web" exact to="/iot-mushroom-web/main" />
        <Redirect to="/iot-mushroom-web/not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
