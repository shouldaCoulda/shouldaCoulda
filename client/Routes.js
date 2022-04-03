import React from "react";
import { connect } from "react-redux";
import { useAuth } from "./contexts/AuthContext";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import ChartContainer from "./components/Chart/ChartContainer";
import AddSubscription from "./components/AddSubscription";
import SelectionScreen from "./components/SelectionScreen";
import { SubscriptionTier } from "./components/SubscriptionTier";
import Home from "./components/Home";
import AddExpensees from "./components/AddExpenses";
import LandingPage from "./components/LandingPage";
import PieChart from "./components/PieChart";
import ListChart from "./components/ListChart";
import FinancialContainer from "./components/Chart/FinancialContainer";

const Routes = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <Switch>
        {currentUser ? (
          <>
            <Route exact path="/" component={Home} />

            <Route exact path="/chart" component={ChartContainer} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/selections" component={SelectionScreen} />
            <Route exact path="/add" component={AddSubscription} />
            <Route exact path="/expense" component={AddExpensees} />
            <Route exact path="/landing" component={LandingPage} />
            <Route
              exact
              path="/subscriptioninfo"
              component={SubscriptionTier}
            />
            <Route exact path="/PieChart" component={PieChart} />
            <Route exact path="/List" component={ListChart} />
          </>
        ) : (
          <>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={SignUp} />
          </>
        )}
      </Switch>
    </div>
  );
};

export default withRouter(connect()(Routes));
