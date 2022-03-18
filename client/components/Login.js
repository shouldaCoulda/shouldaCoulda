import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      console.log(currentUser);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState({});

  // function handleSubmit() {
  //   login(email, password);
  // }

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(auth, email, password);
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // const logout = async () => {};

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
