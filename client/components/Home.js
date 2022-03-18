import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { getDatabase, ref, onValue } from "firebase/database";

/**
 * COMPONENT
 */
export const Home = () => {
  const { currentUser } = useAuth();
  const database = getDatabase();
  const name = ref(database, '/Netflix')

  console.log("database checking...", database)

  console.log("name check..", name)
  return (
    <div>
      <h3>Welcome to shoulda </h3>
      <p>Email:</p> {currentUser?.email}
      {/* <h1>{name}</h1> */}
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
