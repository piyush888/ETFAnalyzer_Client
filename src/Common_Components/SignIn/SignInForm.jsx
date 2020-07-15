import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "../../Utilities/AuthContext";
import { useHistory, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { firebaseAuth } from "../../Utilities/firebase";

const SignInForm = (props) => {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div className="bg-color-dark padding-top-20vh height-100vh text-white">
      <div className="margin-left-auto margin-right-auto width-30em">
        <center>
          <h4>Login</h4>
        </center>
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
