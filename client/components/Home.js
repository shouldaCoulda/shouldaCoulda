import { useAuth } from "../contexts/AuthContext";
import React from "react";

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h3>Welcome to shoulda </h3>
      <h3>Log in or sign up </h3>
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
