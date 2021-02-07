import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "./AuthProvider";
import { Link, Redirect } from "react-router-dom";
import "./Sign.css";
import CustomNavbar from "../reusable-components/CustomNavbar";

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleLogIn, getCurrentUser } = useAuth();

  const user = getCurrentUser();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await handleLogIn(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      setError("An error occured");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="flex-container">
        <CustomNavbar />
        <Card className="form-card">
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
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

              <Button type="submit" className="w-100" disabled={loading}>
                Log In!
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <div className="w-100 text-center m-2">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </div>
        <div className="w-100 text-center m-2">
          Post Div
          <Link to="/post"> Post</Link>
        </div>
      </div>
    </>
  );
}
