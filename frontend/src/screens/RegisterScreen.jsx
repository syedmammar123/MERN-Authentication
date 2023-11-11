import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <h1>Sign Up</h1>

        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='confirm password'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>Sign Up</Button>
        <Row>
          <Col>
            Already Registered? <Link to='/login'>Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
