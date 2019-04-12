import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Page1 from './Page1/Page1';
import Threads from './Threads';
import Thread from './Thread';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/1" component={Page1}/>
      <Route exact path={`/forums/:forumId`} component={Threads}/>
      <Route exact path={`/forums/:forumId/:threadId`} component={Thread}/>
    </Switch>
  )
}

export default Routes;
