import React from "react";
import { useAuth } from "../contexts/AuthContext";

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();

  
  return (
    <div>
      <h3>Welcome to shoulda </h3>
      <p>Email:</p> {currentUser?.email}
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
