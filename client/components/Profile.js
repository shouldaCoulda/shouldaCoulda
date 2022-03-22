import React from "react";
import { useAuth } from "../contexts/AuthContext";
import AddSubscription from "./AddSubscription";

const Profile = () => {
  const { currentUser, usersSubscriptions, removeSubscription } = useAuth();
  // console.log(currentUser);
  console.log(usersSubscriptions);

  function handleDelete(e, uid) {
    console.log(uid);
    removeSubscription(uid);
  }

  return (
    <div>
      <p>Email:</p> {currentUser?.email}
      <p>Subscriptions:</p>{" "}
      {/* {usersSubscriptions.map((elem, i) => {
        return (
          <div elem={elem} key={i}>
            <h1>{elem.name}</h1>
            <h1>{elem.price}</h1>
            <button onClick={(e) => handleDelete(e, i)}>delete</button>
          </div>
        );
      })} */}
      <div style={{ marginTop: "50px" }}>
        <table className="user-sub-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}></th>
              <th style={{ textAlign: "center" }}>Unsubscribe Link:</th>
              <th style={{ textAlign: "center" }}>Subscription:</th>
              <th style={{ textAlign: "center" }}>Cost:</th>
              <th style={{ textAlign: "center" }}></th>
              <th style={{ textAlign: "center" }}></th>
            </tr>
          </thead>
          <tbody>
            {usersSubscriptions.map((sub, index) => {
              console.log(sub);
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={sub.websiteUrl}>
                      <img src={sub.imageUrl} height="90" />
                    </a>
                  </td>
                  <td>{sub.name}</td>
                  <td>{sub.price}/month</td>

                  <td>
                    <button
                      className="remove-button"
                      onClick={(e) => handleDelete(e, sub.uid)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
