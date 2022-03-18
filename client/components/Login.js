import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import {  useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // setError("");
      await login(emailRef.current.value, passwordRef.current.value);
        history.push("/");
    } catch(error) {
      window.alert(error)

      // setError("Failed to log in");
    }

  }

  return (
    <div>
      <form>
        <h1>log in </h1>
        <div>
          <label htmlFor="username">
            <small>Email</small>
          </label>
          <input name="email" type="text" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" ref={passwordRef} />
        </div>
        <div>
          <button onClick={handleSubmit}>login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
