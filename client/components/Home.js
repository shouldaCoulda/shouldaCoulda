import React from "react";
import { useAuth } from "../contexts/AuthContext";
import AllSubscriptions from "./AllSubscriptions";
import AddSubscription from "./AddSubscription";
import SplashScreen from "./SplashScreen";

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div>
        <p>Email:</p> {currentUser?.email}
      </div>
    </>
    // <div>
      {/* <AllSubscriptions />
      <SplashScreen />
      <h3>Welcome to shoulda </h3>
    </div>
    
  );
};
/**
 * CONTAINER
 */

export default Home;
