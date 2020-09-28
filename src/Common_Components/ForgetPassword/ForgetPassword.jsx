import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { firebaseAuth } from "../..";
import { CommonNavBar } from "../NavBar";
import { ToastContainer, toast } from "react-toastify";

const ForgetPassword = (props) => {
  const [email, setEmail] = useState("");

  const onResetPasswordEmail = () => {
    const emailAddress = email;
    firebaseAuth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        toast('Reset Link Sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <>
      <CommonNavBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div className="white-background padding-top-20vh height-100vh">
        <div className="margin-left-auto margin-right-auto width-30em">
          <center>
            <h4 className="text-primary">Forget Password</h4>
          </center>
          <Form>
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
            <Form.Row>
              <Col xs="auto">
                <Button
                  variant="primary"
                  type="button"
                  onClick={onResetPasswordEmail}
                >
                  Submit
                </Button>
              </Col>

              <Col xs="auto">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => props.history.push("/login")}
                >
                  Login
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
