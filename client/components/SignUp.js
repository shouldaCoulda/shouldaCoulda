import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";

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
      signup(emailRef.current.value, passwordRef.current.value);
      history.push("/landing");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  const generator = () => {
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var string = "";
    for (var i = 0; i < 15; i++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    emailRef.current.value = `${string}@gmail.com`;
    passwordRef.current.value = "Password";
    passwordConfirmRef.current.value = "Password";
  };
  return (
    <div>
      <>
        <div className="container">
          <Card className="logincard">
            <Card.Body>
              <h2>sign up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Sign Up
                </Button>
                {/* <Button onClick={generator}>Generate Demo User</Button> */}
              </Form>
            </Card.Body>
          </Card>
        </div>
      </>
    </div>
  );
};
export default SignUp;
