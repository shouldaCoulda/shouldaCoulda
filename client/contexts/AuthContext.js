import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { database } from "../firebase";
import { ref, set, onValue, remove } from "firebase/database";
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
    for (let i = 0; i < subscriptions.length; i++) {
      set(
        ref(
          database,
          "users/" + currentUser.uid + "/subscriptions/" + subscriptions[i].uid
        ),
        {
          name: subscriptions[i].name,
          price: subscriptions[i].price,
          imageUrl: subscriptions[i].imageUrl,
          websiteUrl: subscriptions[i].websiteUrl,
          uid: subscriptions[i].uid,
        }
      );
    }
  }
  async function removeSubscription(uid) {
    var userSubsReff = ref(
      database,
      "users/" + currentUser.uid + "/subscriptions/" + uid
    );
    // set(userSubsReff, {});
    remove(userSubsReff);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      read(user);

      //     // userSubReff = ref(database, "users/" + user.uid + "/subscriptions");
      //     // onValue(userSubReff, (snapshot) => {
      //     //   setSubs([]);
      //     //   const data = snapshot.val();
      //     //   if (data !== null) {
      //     //     Object.values(data).map((subscription) => {
      //     //       setSubs((oldArray) => [...oldArray, subscription]);
      //     //     });
      //     //   }
      //     // });

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function read(user) {
    const str = user.uid || "";
    userSubReff = ref(database, "users/" + str + "/subscriptions");
    onValue(userSubReff, (snapshot) => {
      setSubs([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((subscription) => {
          setSubs((oldArray) => [...oldArray, subscription]);
        });
      }
    });
  }
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
