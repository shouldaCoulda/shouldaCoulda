import React, { useContext, useState, useEffect } from "react";
import { ref, onValue, set, remove } from "firebase/database";
import { database } from "../firebase";
import { uid } from "uid";
import { data } from "../../script/DefaultSubscriptionData";

//hook to use context outside of this file
const SubscriptionContext = React.createContext();

export function useSubscription() {
  return useContext(SubscriptionContext);
}

var dbRef = ref(database);

var subRef = ref(database, "subscriptions");

export function SubscriptionProvider({ children }) {
  var [defaultSubscriptions, setSub] = useState([]);

  //Read from table
  useEffect(() => {
    onValue(subRef, (snapshot) => {
      setSub([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((subscription) => {
          setSub((oldArray) => [...oldArray, subscription]);
        });
      }
    });
  }, []);

  //this writes data into the subscriptions folder
  function writeSubscriptionData(name, price, userId) {
    const uuid = uid();
    set(ref(database, `users/` + userId + "/subscriptions/" + uuid), {
      name: name,
      price: price,
      uid: uuid,
    });
  }

  //delete
  const handleDelete = (subscription) => {
    remove(ref(database, `/${subscription.uuid}`));
  };

  //this function removes all enteries in the sunbscriptions and fils it with data
  //that is imported from scrpti/defaultsubscriptions

  function setPrice() {}

  function seed() {
    remove(ref(database, `/subscriptions`));
    for (let i = 0; i < data.length; i++) {
      const uuid = uid();
      set(ref(database, `subscriptions/` + uuid), {
        name: data[i].name,
        price: data[i].price,
        plans: data[i].plans,
        imageUrl: data[i].imageUrl,
        websiteUrl: data[i].websiteUrl,
        uid: uuid,
      });
    }
  }

  const value = {
    defaultSubscriptions,
    writeSubscriptionData,
    seed,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}
