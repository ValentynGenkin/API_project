import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc( 100vh - 68px)',
      }}
    >
      <div
        style={{
          width: '20rem',
          height: '18rem',
          background: 'lightGrey',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '5px',
        }}
      >
        <Form style={{ width: '90%', height: '90%' }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <p
            className="text-muted"
            style={{ marginBottom: '16px', fontSize: '14px' }}
          >
            Don't have an account? <Link>Registration</Link>
          </p>
          <Button as={Link} variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
