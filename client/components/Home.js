import React from "react";
import AllSubscriptions from "./AllSubscriptions";
import AddSubscription from "./AddSubscription";

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div>
      <AllSubscriptions />
      <AddSubscription />
      <h3>Welcome to shoulda </h3>
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
