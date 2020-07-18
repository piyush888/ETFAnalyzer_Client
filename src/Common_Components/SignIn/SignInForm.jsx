import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "../../Utilities/AuthContext";
import { Redirect, NavLink } from "react-router-dom";
import { firebaseAuth } from "../../Utilities/firebase";

const SignInForm = (props) => {
  const { currentUser, logout } = useContext(AuthContext);
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

  const onSendVerificationEmail = () => {
    if (currentUser) {
      currentUser
        .sendEmailVerification()
        .then((res) => {
          alert("Verification Link Sent");
          logout();
        })
        .catch((err) => alert(err.message));
    }
  };

  if (currentUser && currentUser.emailVerified) {
    return <Redirect to="/" />;
  }
  return (
    <div className="bg-color-dark padding-top-20vh height-100vh text-white">
      {currentUser && !currentUser.emailVerified ? (
        <div className="margin-left-auto margin-right-auto width-30em">
          <center>
            <h4>Verify email address</h4>
          </center>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                readOnly
                value={currentUser.email}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Row>
              <Col>
                <Button
                  variant="primary"
                  type="button"
                  onClick={onSendVerificationEmail}
                >
                  Send Verification Link
                </Button>
              </Col>

              <Col>
                <Button
                  type="button"
                  onClick={() => {
                    logout();
                  }}
                  variant="primary"
                >
                  Logout
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      ) : (
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

            <Form.Row>
              <Col>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Col>
              <Col>
                <Button as={NavLink} to="/signup" variant="primary">
                  Signup
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      )}
    </div>
  );
};

export default SignInForm;
