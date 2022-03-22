import React, { useContext, useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  get,
  child,
  set,
  remove,
} from "firebase/database";
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
  var [defualtSubscriptions, setSub] = useState([]);

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

  function writeSubscriptionData(name, price) {
    const uuid = uid();
    set(ref(database, `subscriptions/` + uuid), {
      name: name,
      price: price,
    });
  }

  //delete **********test this
  const handleDelete = (subscription) => {
    remove(ref(database, `/${subscription.uuid}`));
  };

  function seed() {
    for (let i = 0; i < data.length; i++) {
      const uuid = uid();
      set(ref(database, `subscriptions/` + uuid), {
        name: data[i].name,
        price: data[i].price,
        imageUrl: data[i].imageUrl,
        websiteUrl: data[i].websiteUrl,
        uid: uuid,
      });
    }
    console.log(data);
  }

  const value = {
    defualtSubscriptions,
    writeSubscriptionData,
    seed,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}
