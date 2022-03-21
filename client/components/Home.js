import React from 'react';
import { useAuth } from '../contexts/AuthContext';
// import AllSubscriptions from './AllSubscriptions';
import UserSubscriptions from './UserProfile';
// import AddSubscription from "./AddSubscription";
// import SplashScreen from "./SplashScreen";

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();


  return (
    <div>
      <AllSubscriptions />
      <AddSubscription />
      <SplashScreen />
      <h3>Welcome to shoulda </h3>
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
