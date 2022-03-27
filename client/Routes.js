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

const Routes = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <Switch>
        {currentUser ? (
          <>
            <Route exact path='/chart' component={ChartContainer} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/home' component={SelectionScreen} />
            <Route exact path='/add' component={AddSubscription} />
            <Route exact path='/' component={ChartContainer} />
            <Route
              exact
              path='/subscriptioninfo'
              component={SubscriptionTier}
            />
            <Route exact path='/alert' component={SignInPrompt} />
          </>
        ) : (
          <>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/' component={SelectionScreen} />
            <Route
              exact
              path='/subscriptioninfo'
              component={SubscriptionTier}
            />
            <Route exact path='/chart' component={ChartContainer} />
          </>
        )}
      </Switch>
    </div>
  );
};

export default withRouter(connect()(Routes));
