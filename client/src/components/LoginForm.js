import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Spinner from 'react-bootstrap/esm/Spinner';

const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation = useNavigate();

  const [data, isLoading, error, fetchData] = useFetch(`api/auth/login`);

  const loginExecute = () => {
    fetchData({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  };

  useEffect(() => {
    if (data && data.success) {
      navigation('/user-menu');
    }
  }, [data]);

  return (
    <>
      <div className="login-form-block">
        <Form className="login-form">
          <Form.Group
            className="mb-3"
            onChange={(e) => setEmail(e.target.value)}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            onChange={(e) => setPassword(e.target.value)}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <p className="text-muted login-form-registration">
            Don't have an account? <Link to={'registration'}>Registration</Link>
          </p>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              loginExecute();
            }}
          >
            {isLoading ? (
              <>
                {' '}
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="loading-spinner"
                />
                <span className="visually-hidden">Loading...</span>
              </>
            ) : (
              'Login'
            )}
          </Button>
          {error && <p>{error.toString()}</p>}
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
