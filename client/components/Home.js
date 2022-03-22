import React from "react";
import { useAuth } from "../contexts/AuthContext";
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

      <SplashScreen />
      {/* <Carousel /> */}
      <h3>Welcome to shoulda </h3>
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
