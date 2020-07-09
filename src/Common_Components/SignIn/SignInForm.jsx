import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "../../Utilities/AuthContext";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const SignInForm = () => {
  const { authenticate, getSession } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getSession().then((session) => history.push("/ETF-Description"));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        history.push("/ETF-Description");
      })
      .catch((err) => {
        console.error("Failed to login!", err);
      });
  };
  return (
    <div className="bg-color-dark padding-top-20vh height-100vh">
      <div className="margin-left-auto margin-right-auto width-30em">
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;