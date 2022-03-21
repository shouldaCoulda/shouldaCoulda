import React from 'react';
import AllSubscriptions from './AllSubscriptions';
import AddSubscription from './AddSubscription';
import SplashScreen from './SplashScreen';
import Charts from './Charts';
import PieChart from './PieChart';

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div>
      <AllSubscriptions />
      <AddSubscription />
      <SplashScreen />
      <h3>Welcome to shoulda </h3>
      <Charts />
      <PieChart />
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
