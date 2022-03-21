import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser, usersSubscriptions } = useAuth();
  console.log(currentUser);
  console.log(usersSubscriptions);
  return (
    <div>
      <p>Email:</p> {currentUser?.email}
      <p>Subscriptions:</p>{" "}
      {usersSubscriptions.map((elem, i) => {
        return (
          <div elem={elem} key={i}>
            <h1>{elem.name}</h1>
            <h1>{elem.price}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
