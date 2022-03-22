import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { useAuth } from "./contexts/AuthContext";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Charts from "./components/Charts";
import Carousel from "./components/Carousel";

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
            <Route exact path="/chart" component={Charts} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/home" component={Carousel} />
            <Route exact path="/" component={Charts} />
          </>
        ) : (
          <>
            <Route exact path="/chart" component={Charts} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Carousel} />
          </>
        )}
      </Switch>
    </div>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(Routes));
