import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { database } from "../firebase";
import { ref, set, onValue } from "firebase/database";
import { uid } from "uid";

//
const AuthContext = React.createContext();
var dbRef = ref(database);
var userRef = ref(database, "users");

/*this hook makes it so that we dont need to access
the auth context outside of this file
*/
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  /*this is where out logged in user is saved in state, this can be accessed
  anywhere in our application by
  ******************************************************* 
  import { useAuth } from " path to AuthContext";
  const Component = () => {
      const {  currentUser } = useAuth();
    return ( 
      <h1> {currentUser.email}    </h1>
     );
  }
  **************************************************
  */
  var [currentUser, setCurrentUser] = useState(null);
  const [usersSubscriptions, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  var userSubReff = "";

  async function signup(email, password) {
    try {
      /* calls the firebase/auth method createUserWithEmailAndPassword()
      this method passes in our auth,email,and password and will create
      a user in our firebase. then sets the currentUser to this user
      */
      const createdUser = createUserWithEmailAndPassword(auth, email, password);
      var user = {
        uid: createdUser.uid,
        email: createdUser.email,
      };
      writeUserData(user);
    } catch (error) {
      console.log(error.message);
    }
  }
  function writeUserData(user) {
    const uuid = uid();
    console.log("in write user data ", user);

    var userReff = ref(database, "users/" + user.uid);

    set(userReff, user);
  }

  async function login(email, password) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function logout() {
    return auth.signOut();
  }

  async function writeSubscriptions(subscriptions) {
    // var userSubsReff = ref(
    //   database,
    //   "users/" + currentUser.uid + "/subscriptions"
    // );
    // set(userSubsReff, subscriptions);
    // var userSubsReff = ref(
    //   database,
    //   "users/" + currentUser.uid + "/subscriptions"
    // );

    // set(userSubsReff, subscriptions);
    for (let i = 0; i < subscriptions.length; i++) {
      const uuid = uid();
      console.log("in loop");
      set(
        ref(database, "users/" + currentUser.uid + "/subscriptions/" + uuid),
        {
          name: subscriptions[i].name,
          price: subscriptions[i].price,
        }
      );
    }
  }
  async function removeSubscription(idx) {
    console.log(idx);
    const str = idx + "";
    var userSubsReff = ref(
      database,
      "users/" + currentUser.uid + "/subscriptions/" + str
    );
    set(userSubsReff, {});
    console.log("in conterxt remove", idx);
  }

  useEffect(async () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      userSubReff = ref(database, "users/" + user.uid + "/subscriptions");
      onValue(userSubReff, (snapshot) => {
        setSubs([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((subscription) => {
            setSubs((oldArray) => [...oldArray, subscription]);
          });
        }
      });

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    writeUserData,
    writeSubscriptions,
    usersSubscriptions,
    removeSubscription,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
