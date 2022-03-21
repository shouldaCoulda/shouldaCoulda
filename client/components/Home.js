import React from 'react';
import AllSubscriptions from './AllSubscriptions';
import AddSubscription from './AddSubscription';
import SplashScreen from './SplashScreen';
import Charts from './Charts';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { useAuth } from '../contexts/AuthContext';

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {/* <AllSubscriptions />
      <AddSubscription />
      <SplashScreen /> */}
      <h3>Welcome to shoulda </h3>
      <LineChart />
      <Charts />
      <PieChart />
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
