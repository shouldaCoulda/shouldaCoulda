import { remove } from "firebase/database";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { database } from "../firebase";
// import { db } from '../firebase'
// import { collection, getDocs } from 'firebase/firestore'



const UserSubscriptions = () => {

  const handleDelete = (id) => {
    if (window.confirm("remove this subscription?")) {
      remove(ref(database, "subscriptions/" + uuid));
    }
  };

  return (
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
          {selectedSubArray.map((sub, index) => {
            return (
              <tr key={sub.id}>
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
                    className="edit-cost"
                    onClick={() => handleDelete(sub.id)}
                  >
                    Edit Cost
                  </button>
                </td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => handleDelete(sub.id)}
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
  );
};

export default UserSubscriptions;
