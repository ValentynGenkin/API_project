import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Spinner from 'react-bootstrap/esm/Spinner';
import { default as useFetchAuth } from '../hooks/useFetch';
import { isValidEmail } from '../util/emailValidation';

const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(false);

  const navigation = useNavigate();

  const [authData, , , authFetchData] = useFetchAuth(`api/auth/authentication`);

  useEffect(() => {
    authFetchData({
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);

  useEffect(() => {
    if (authData && authData.success) {
      setTimeout(() => {
        navigation('/user-menu');
      }, 2000);
    }
  }, [authData]);

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
      {authData ? (
        <Spinner animation="border" role="status" />
      ) : (
        <div className="login-form-block">
          <Form className="login-form">
            <Form.Group
              className="mb-3 login-form-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group
              className="mb-3 login-form-input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            >
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <div className="login-form-btn-block">
            <p className="text-muted login-form-registration">
              Don't have an account?{' '}
              <Link to={'registration'}>Registration</Link>
            </p>
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                if (isValidEmail(email) && password) {
                  setLoginError(false);
                  loginExecute();
                } else {
                  setLoginError(true);
                }
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
          </div>
          {loginError ? <p>Check email and/or login</p> : null}
          {error && <p>{error.msg}</p>}
        </div>
      )}
    </>
  );
};

export default LoginForm;
