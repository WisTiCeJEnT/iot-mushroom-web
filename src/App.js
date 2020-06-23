import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Main from "./pages/main";
import Status from "./pages/status";
import NotFound from "./pages/notFound";
import Login from "./pages/login";
const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/status" component={Status} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/main" component={Main} />
        <Redirect from="/" exact to="/main" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
