import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser, usersSubscriptions, removeSubscription } = useAuth();
  // console.log(currentUser);
  console.log(usersSubscriptions);

  function handleDelete(e, idx) {
    removeSubscription(idx);
  }

  return (
    <div>
      <p>Email:</p> {currentUser?.email}
      <p>Subscriptions:</p>{" "}
      {usersSubscriptions.map((elem, i) => {
        return (
          <div elem={elem} key={i}>
            <h1>{elem.name}</h1>
            <h1>{elem.price}</h1>
            <button onClick={(e) => handleDelete(e, i)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
