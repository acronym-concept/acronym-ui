import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Router;
