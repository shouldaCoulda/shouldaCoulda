import React from 'react';
import { connect } from 'react-redux';
import { useAuth } from './contexts/AuthContext';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import ChartContainer from './components/Chart/ChartContainer';
import AddSubscription from './components/AddSubscription';
import SelectionScreen from './components/SelectionScreen';
import { SubscriptionTier } from './components/SubscriptionTier';
import SignInPrompt from './components/SignInPrompt';
import Home from './components/Home';
import AddExpensees from './components/AddExpenses';
import LandingPage from './components/LandingPage';

const Routes = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <Switch>
        {currentUser ? (
          <>
            <Route exact path='/' component={Home} />
            <Route exact path='/chart' component={ChartContainer} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/selections' component={SelectionScreen} />
            <Route exact path='/add' component={AddSubscription} />
            <Route exact path='/expense' component={AddExpensees} />
            <Route
              exact
              path='/subscriptioninfo'
              component={SubscriptionTier}
            />
          </>
        ) : (
          <>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route path='/' component={LandingPage} />
          </>
        )}
      </Switch>
    </div>
  );
};

export default withRouter(connect()(Routes));
