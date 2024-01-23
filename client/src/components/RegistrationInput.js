import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/registrationForm.css';

function RegistrationInput() {
  const navigation = useNavigate();

  return (
    <Container className="registration-form-container">
      <div className="registration-form-inputs-container">
        <h4 className="registration-form-title">Registration from</h4>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-first-name">First name</Form.Label>
          <Form.Control type="text" id="registration-first-name" />
        </div>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-last-name">Last name</Form.Label>
          <Form.Control type="text" id="registration-last-name" />
        </div>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-birthday">Date of birth</Form.Label>
          <Form.Control type="date" id="registration-birthday" />
        </div>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-email">E-mail</Form.Label>
          <Form.Control type="email" id="registration-email" />
        </div>
        <hr className="registration-form-line" />
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-password">Password</Form.Label>
          <Form.Control type="password" id="registration-password" />
        </div>
        <div className="registration-form-input">
          <Form.Label htmlFor="registration-repeat-password">
            Repeat password
          </Form.Label>
          <Form.Control type="password" id="registration-repeat-password" />
        </div>
        <div className="registration-form-btn">
          <Button as={Link} variant="secondary">
            Submit
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
      </div>
    </Container>
  );
}

export default RegistrationInput;
