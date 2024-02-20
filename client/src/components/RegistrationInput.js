import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import { isValidName } from '../util/nameValidation';
import { isValidEmail } from '../util/emailValidation';
import useFetch from '../hooks/useFetch';
import Spinner from 'react-bootstrap/esm/Spinner';

function RegistrationInput() {
  const navigation = useNavigate();

  const [userData, setUserData] = useState({
    firstName: null,
    lastName: null,
    birthday: null,
    email: null,
    password: null,
  });

  const [repeatPassword, setRepeatPassword] = useState('');
  const [formError, setFormError] = useState(null);

  const userDataCheck = () => {
    for (let key in userData) {
      if (!userData[key]) {
        setFormError(`Check registration details, all fields are required `);
        return false;
      }
    }

    if (userData.password !== repeatPassword) {
      setFormError('Passwords do not match');
      return false;
    }

    return true;
  };

  const [data, isLoading, error, fetchData] = useFetch(`api/auth/registration`);

  const createUser = () => {
    fetchData({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(userData),
    });
  };

  useEffect(() => {
    if (data && data.success) {
      navigation('/user-menu');
    }
  }, [data]);

  return (
    <>
      <div className="registration-form-inputs-container">
        <h4 className="registration-form-title">Registration from</h4>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-first-name">First name</Form.Label>
          <Form.Control
            type="text"
            id="registration-first-name"
            onChange={(e) => {
              const firstName = e.target.value;
              if (isValidName(firstName)) {
                setUserData({ ...userData, firstName });
              } else {
                setUserData({ ...userData, firstName: null });
              }
            }}
          />
        </div>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-last-name">Last name</Form.Label>
          <Form.Control
            type="text"
            id="registration-last-name"
            onChange={(e) => {
              const lastName = e.target.value;
              if (isValidName(lastName)) {
                setUserData({ ...userData, lastName });
              } else {
                setUserData({ ...userData, lastName: null });
              }
            }}
          />
        </div>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-birthday">Date of birth</Form.Label>
          <Form.Control
            type="date"
            id="registration-birthday"
            onChange={(e) => {
              setUserData({ ...userData, birthday: new Date(e.target.value) });
            }}
          />
        </div>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-email">E-mail</Form.Label>
          <Form.Control
            type="email"
            id="registration-email"
            onChange={(e) => {
              const email = e.target.value;
              if (isValidEmail(email)) {
                setUserData({ ...userData, email });
              } else {
                setUserData({ ...userData, email: null });
              }
            }}
          />
        </div>
        <hr className="registration-form-line" />
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-password">Password</Form.Label>
          <Form.Control
            type="password"
            id="registration-password"
            onChange={(e) => {
              const password = e.target.value;
              setUserData({ ...userData, password });
            }}
          />
        </div>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-repeat-password">
            Repeat password
          </Form.Label>
          <Form.Control
            type="password"
            id="registration-repeat-password"
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
          />
        </div>
        <div className="registration-form-btn">
          <Button
            as={Link}
            variant="secondary"
            onClick={() => {
              if (userDataCheck()) {
                setFormError(null);
                createUser();
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
              'Submit'
            )}
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => {
              navigation(-1);
            }}
          >
            Cancel
          </Button>
        </div>
        {formError ? <p>{formError}</p> : null}
        {error ? <p>{error.toString()}</p> : null}
      </div>
    </>
  );
}

export default RegistrationInput;
