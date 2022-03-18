import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AllSubscriptions from './AllSubscriptions';

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();

  
  return (
    <div>
      <AllSubscriptions />
      <h3>Welcome to shoulda </h3>
      <p>Email:</p> {currentUser?.email}
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
