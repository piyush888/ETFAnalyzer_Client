import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { firebaseAuth } from "../../Utilities/firebase";
import { CommonNavBar } from "../NavBar";

const SignUpForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
      props.history.push("/login");
    } catch (err) {
      alert(err.code)
    }
  };
  return (
   
    <>
     <CommonNavBar/>
    
    <div className="white-background padding-top-20vh height-100vh">
      <div className="margin-left-auto margin-right-auto width-30em">
        <center>
          <h4 className="text-primary">Signup</h4>
        </center>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-primary">Email address</Form.Label>
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
            <Form.Label className="text-primary">Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <p className="light">By Signing up you agree to our Terms & Conditions. This is an analytical tool & though we stand behind our numbers we won't be held responsible for any losses incurred in the market if you make trading decisions using our application www.etftrace.com.</p>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
    </>
  );
};

export default SignUpForm;
