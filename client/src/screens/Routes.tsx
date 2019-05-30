import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import New from "./New";
import Thread from "./Thread";
import Threads from "./Threads";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={New} />
      <Route exact path={`/forums/:forumId`} component={Threads} />
      <Route exact path={`/forums/:forumId/:threadId`} component={Thread} />
    </Switch>
  );
};

export default Routes;
