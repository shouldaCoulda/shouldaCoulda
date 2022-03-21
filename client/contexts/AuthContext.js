import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
<<<<<<< HEAD


//
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

=======
import { database } from "../firebase";
import { getDatabase, ref, onValue, get, child, set } from "firebase/database";
import { uid } from "uid";

//
const AuthContext = React.createContext();
var dbRef = ref(database);

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
// return useContext(AuthContext);
>>>>>>> main

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
<<<<<<< HEAD
  const [currentUser, setCurrentUser] = useState();
=======
  const [currentUser, setCurrentUser] = useState(null);
>>>>>>> main
  const [loading, setLoading] = useState(true);

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
<<<<<<< HEAD
=======
      var user = {
        name: "firstName",
        email: createdUser.email,
        uid: createdUser.uid,
      };
      writeUserData(user);
>>>>>>> main
    } catch (error) {
      console.log(error.message);
    }
  }
<<<<<<< HEAD

  async function login(email, password) {

=======
  function writeUserData(user) {
    const uuid = uid();
    console.log("in write user data ");
    set(ref(database, "users/" + uuid)),
      {
        email: "user.email",
        firstName: "firstName",
      };
  }

  async function login(email, password) {
>>>>>>> main
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // return user
    } catch (error) {
      console.log(error.message);
    }
  }

  async function logout() {
    return auth.signOut();
  }

<<<<<<< HEAD
  async function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

=======
>>>>>>> main
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
<<<<<<< HEAD
    updatePassword,
  };
//the 
=======
  };

  //the
>>>>>>> main
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
