import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";

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
      // setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      window.alert(error);

      // setError("Failed to log in");
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Log In</h2>
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
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
    // <div>
    //   <form>
    //     <h1>log in </h1>
    //     <div>
    //       <label htmlFor="username">
    //         <small>Email</small>
    //       </label>
    //       <input name="email" type="text" ref={emailRef} />
    //     </div>
    //     <div>
    //       <label htmlFor="password">
    //         <small>Password</small>
    //       </label>
    //       <input name="password" type="password" ref={passwordRef} />
    //     </div>
    //     <div>
    //       <button onClick={handleSubmit}>login</button>
    //     </div>
    //   </form>
    // </div>
  );
};
export default Login;
