import React, { useContext, useState, useEffect } from "react";
import { getDatabase, ref, onValue, get, child, set } from "firebase/database";
import { database } from "../firebase";
import { uid } from "uid";

//hook to use context outside of this file
const SubscriptionContext = React.createContext();
export function useSubscription() {
  return useContext(SubscriptionContext);
}

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
  var subscriptions = [];
  // console.log('at the begening of the provider', subscriptions)
  var [defualtSubscriptions, setSub] = useState([]);

  // useEffect(() => {
  //   onValue(subRef, (snapshot) => {
  //     const data = snapshot.val();
  //     subscriptions = data;
  //     setSub(subscriptions);
  //     console.log(data);
  //     console.log(subscriptions);
  //   });
  // }, []);

  useEffect(() => {
    onValue(subRef, (snapshot) => {
      setSub([]);
      const data = snapshot.val();
      console.log(data);
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

  //delete
  const handleDelete = (subscription) => {
    remove(ref(database, `/${subscription.uuid}`));
  };

  const value = {
    defualtSubscriptions,
    subscriptions,
    writeSubscriptionData,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}
