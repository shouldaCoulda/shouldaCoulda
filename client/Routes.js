import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { useAuth } from './contexts/AuthContext';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Carousel from './components/Carousel';
import LineChart from './components/LineChart';
import Test from './components/Test';

/**
 * COMPONENT
 */

const Routes = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <Switch>
        {currentUser ? (
          <>
            <Route exact path='/chart' component={LineChart} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/home' component={Carousel} />
            <Route exact path='/' component={LineChart} />
          </>
        ) : (
          <>
            <Route exact path='/chart' component={LineChart} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/' component={Carousel} />
            <Route exact path='/Test' component={Test} />
          </>
        )}
      </Switch>
    </div>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(Routes));
