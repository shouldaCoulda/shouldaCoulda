import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { useAuth } from "./contexts/AuthContext";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Carousel from "./components/Carousel";
import LineChart from "./components/LineChart";
import { SubscriptionTier } from "./components/SubscriptionTier";
import ChartContainer from "./components/Chart/ChartContainer";


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
            <Route exact path="/chart" component={ChartContainer} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/home" component={Carousel} />
            <Route exact path="/" component={ChartContainer} />
          </>
        ) : (
          <>
            <Route exact path="/chart" component={LineChart} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Carousel} />
            <Route
              exact
              path="/subscriptionInfo"
              component={SubscriptionTier}
            />
          </>
        )}
      </Switch>
    </div>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(Routes));
