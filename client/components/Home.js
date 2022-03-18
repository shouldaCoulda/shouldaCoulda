import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useSubscription } from "../contexts/SubscriptionContext";
import { getDatabase, ref, onValue, get, child } from "firebase/database";

/**
 * COMPONENT
 */
export const Home = () => {
  // var netflix = {};
  // var subscriptions = [];

  const { currentUser } = useAuth();
  const { defualtSubscriptions, subscriptions, getSubscriptions } =
    useSubscription();

  // test = getSubscriptions().then(
  //   console.log("after getSub", defualtSubscriptions)
  // );

  // const print = () => {
  //   console.log(defualtSubscriptions);
  // };
  // print();
  // console.log(defualtSubscriptions);
  // console.table(subscriptions);

  // const database = getDatabase();
  // const dbRef = ref(database);

  // get(child(dbRef, "Netflix")).then((snapshot) => {
  //   netflix = snapshot.val();
  //   console.log("name check..", netflix);
  // });

  // get(child(dbRef, "subscriptions")).then((snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     subscriptions.push(childSnapshot.val());
  //   });
  //   console.log("name check..", subscriptions);
  // });
  // function copySubscriptions(subs) {
  //   setSubscriptions(subs);
  // }
  console.log(getSubscriptions());
  return (
    <div>
      <h3>Welcome to shoulda </h3>
      <p>Email:</p> {currentUser?.email}
      <h2>subscriptions</h2>
      {subscriptions.map((sub) => {
        return (
          <div sub={sub} key={sub.id}>
            <h1> {sub.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

/**
 * CONTAINER
 */

export default Home;
