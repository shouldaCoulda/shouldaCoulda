import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { useAuth } from "./contexts/AuthContext";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { SubscriptionTier } from "./components/SubscriptionTier";
import ChartContainer from "./components/Chart/ChartContainer";
import AddSubscription from "./components/AddSubscription";
import SelectionScreen from "./components/SelectionScreen";

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
            <Route exact path="/home" component={SelectionScreen} />
            <Route exact path="/add" component={AddSubscription} />
            <Route exact path="/" component={ChartContainer} />
          </>
        ) : (
          <>
            <Route exact path="/chart" component={ChartContainer} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={SelectionScreen} />
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
