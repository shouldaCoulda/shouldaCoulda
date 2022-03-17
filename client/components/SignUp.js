import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  function handleSubmit() {
    console.log("submit");
    signUp(email, password);
  }

  const signUp = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(createdUser);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {};
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <form>
        <h1>sign up</h1>
        <div>
          <label htmlFor="username">
            <small>Email</small>
          </label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
        <div>
          <button onClick={logout}>logout</button>
        </div>
        {user?.email}
      </form>
    </div>
  );
};
export default SignUp;
