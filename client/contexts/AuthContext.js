import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

/*this hook makes it so that we dont need to access
the auth context outside of this file
*/
export function useAuth() {
  const context = useContext(AuthContext);
  const history = useHistory();
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
  const [usersExpenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  var userSubReff = "";

  async function signup(email, password) {
    try {
      /* calls the firebase/auth method createUserWithEmailAndPassword()
      this method passes in our auth,email,and password and will create
      a user in our firebase. then sets the currentUser to this user
      */
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  //this function writes user data into the user database
  function writeUserData(user) {
    var userReff = ref(database, "users/" + user.uid + "/email");
    set(userReff, user);
    currentUser.updateEmail(user.email);
  }

  //Login with email and pass
  async function login(email, password) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  }

  //Logout
  async function logout() {
    return auth.signOut();
  }

  //this funtion adds subscriptions into a users subscriptions/
  //collestion
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
          plans: subscriptions[i].plans || [],
        }
      );
    }
  }

  //this function romoves a subscription from a user's subscriptions
  //it removes the subscription based on the uid
  async function removeSubscription(uid) {
    var userSubsReff = ref(
      database,
      "users/" + currentUser.uid + "/subscriptions/" + uid
    );
    remove(userSubsReff);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      read(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  //this function sets the onvalue listner that saves the value of a
  //users subscriptions into the usersSubscriptions state
  function read(user) {
    if (user) {
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
      let userExpReff = ref(database, "users/" + str + "/expenses");
      onValue(userExpReff, (snapshot) => {
        setExpenses([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((expense) => {
            setExpenses((oldArray) => [...oldArray, expense]);
          });
        }
      });
    }
  }
  function getTotal() {
    return usersSubscriptions
      .reduce((total, sub) => {
        return total + Number(sub.price);
      }, 0)
      .toFixed(2);
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
    getTotal,
    usersExpenses,
    setExpenses,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
