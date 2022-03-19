import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

//
const AuthContext = React.createContext();

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
  const [currentUser, setCurrentUser] = useState(null);
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
    } catch (error) {
      console.log(error.message);
    }
  }

  async function login(email, password) {
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
  };

  //the
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
