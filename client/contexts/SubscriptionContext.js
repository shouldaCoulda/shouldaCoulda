import React, { useContext, useState, useEffect } from "react";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { database } from "../firebase";

const SubscriptionContext = React.createContext();
//hook to use context outside of this file
export function useSubscription() {
  return useContext(SubscriptionContext);
}

const dbRef = ref(database);

var subscriptions = [];

get(child(dbRef, "subscriptions")).then((snapshot) => {
  snapshot.forEach((childSnapshot) => {
    var childData = childSnapshot.val();
    subscriptions.push(childData);
  });
  //   console.table(subscriptions);
  //   console.log(subscriptions);
});

export function SubscriptionProvider({ children }) {
  // console.log('at the begening of the provider', subscriptions)
  var [defualtSubscriptions, setSub] = useState([]);

  const getSubscriptions = async () => {
    await setSub(subscriptions)
    return defualtSubscriptions;
  };

  useEffect(() => {
    // console.log("in use effect", subscriptions);
  }, []);

  const value = {
    defualtSubscriptions,
    subscriptions,
    getSubscriptions,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}
