import React from 'react';
import AllSubscriptions from './AllSubscriptions';
import AddSubscription from './AddSubscription';
import SplashScreen from './SplashScreen';
import Charts from './Charts';

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div>
      {/* <AllSubscriptions />
      <AddSubscription /> */}

      <h3>Welcome to shoulda </h3>
      <Charts />
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
