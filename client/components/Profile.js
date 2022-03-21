import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth();
  console.log(currentUser.uid);
  return (
    <div>
      <p>Email:</p> {currentUser?.email}
    </div>
  );
};

export default Profile;
