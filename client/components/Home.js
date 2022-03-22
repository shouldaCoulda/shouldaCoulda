import React from "react";
import { useAuth } from "../contexts/AuthContext";
import SplashScreen from "./SplashScreen";
import { useSubscription } from "../contexts/SubscriptionContext";

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <SplashScreen />

      <h3>Welcome to shoulda </h3>
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
