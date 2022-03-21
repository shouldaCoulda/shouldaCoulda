import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, writeUserData } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      console.log(emailRef.current.value, passwordRef.current.value);
      signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  
  return (
    <div>
      <form>
        <h1>sign up</h1>
        <div>
          <label htmlFor="username">
            <small>Email</small>
          </label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input type="password" ref={passwordRef} />
        </div>
        <div>
          <label htmlFor="password-confirm">
            <small>Password Confirmation</small>
          </label>
          <input type="password" ref={passwordConfirmRef} />
        </div>
        <div>
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
