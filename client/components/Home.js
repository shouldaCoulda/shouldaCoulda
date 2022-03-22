import React from "react";
import { useAuth } from "../contexts/AuthContext";
import AllSubscriptions from "./AllSubscriptions";
import UserSubscriptions from "./UserProfile";
import AddSubscription from "./AddSubscription";
import SplashScreen from "./SplashScreen";
import { useSubscription } from "../contexts/SubscriptionContext";

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();
  const { seed } = useSubscription();

  function handleClick() {
    console.log("click Handled");
    seed();
  }

  return (
    <div>
      <button onClick={handleClick}>Seed!!!!</button>
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
