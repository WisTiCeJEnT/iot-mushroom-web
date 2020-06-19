import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Main from "./pages/main";
import Status from "./pages/status";
import NotFound from "./pages/notFound";
const App = () => {
  return (
    <Switch>
      <Route path="/status" component={Status} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/main" component={Main} />
      <Redirect from="/" exact to="/main" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default App;
