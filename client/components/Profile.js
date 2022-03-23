import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser, usersSubscriptions, removeSubscription, getTotal } =
    useAuth();

  function handleDelete(e, uid) {
    removeSubscription(uid);
  }
  return (
    <div>
      <p>Email:</p> {currentUser?.email}
      <p>Subscriptions:</p>{" "}
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
                      className="logoutButton"
                      onClick={(e) => handleDelete(e, sub.uid)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Total: </td>
              <td className="user-sub-total">
                ${getTotal()}
                /month!{" "}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Profile;
