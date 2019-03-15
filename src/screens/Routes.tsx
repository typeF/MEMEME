import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Page1 from './Page1/Page1';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/1" component={Page1}/>
      <Route exact path="/2" component={Home}/>
    </Switch>
  )
}

export default Routes;
