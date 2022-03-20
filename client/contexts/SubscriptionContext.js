import React, { useContext, useState, useEffect } from "react";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { database } from "../firebase";

//hook to use context outside of this file
const SubscriptionContext = React.createContext();
export function useSubscription() {
  return useContext(SubscriptionContext);
}

var subscriptions = [];

var dbRef = ref(database);
// get(child(dbRef, "subscriptions")).then((snapshot) => {
//   snapshot.forEach((childSnapshot) => {
//     var childData = childSnapshot.val();
//     subscriptions.push(childData);
//   });

// });
var subRef = ref(database, "subscriptions");
// onValue(subRef, (snapshot) => {
//   snapshot.forEach((childSnapshot) => {
//     var childData = childSnapshot.val();
//     subscriptions.push(childData);
//     console.log(subscriptions)
//   });
// });

export function SubscriptionProvider({ children }) {
  // console.log('at the begening of the provider', subscriptions)
  var [defualtSubscriptions, setSub] = useState([]);

  onValue(subRef, (snapshot) => {
    const data = snapshot.val();
    // setSub(data);
    console.log(data);
  });

  const value = {
    defualtSubscriptions,
    subscriptions,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}
