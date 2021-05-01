import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../../components/pages/Dashboard/index';
import About from '../../components/pages/About';
import Register from '../../components/pages/Register'
import Login from'../../components/pages/Login' ;

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        
      </Switch>
    </Router>
  );
};

export default Routes;