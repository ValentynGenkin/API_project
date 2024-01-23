import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationInput() {
  const navigation = useNavigate();

  return (
    <Container style={{ minHeight: 'calc(100vh - 44px)' }}>
      <Button
        variant="secondary"
        onClick={() => {
          navigation(-1);
        }}
      >
        Back
      </Button>
      <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <h4>Registration from</h4>
        <Form.Label htmlFor="registration-first-name">First name</Form.Label>
        <Form.Control type="text" id="registration-first-name" />

        <Form.Label htmlFor="registration-last-name">Last name</Form.Label>
        <Form.Control type="text" id="registration-last-name" />

        <Form.Label htmlFor="registration-birthday">Date of birth</Form.Label>
        <Form.Control type="date" id="registration-birthday" />

        <Form.Label htmlFor="registration-email">E-mail</Form.Label>
        <Form.Control type="email" id="registration-email" />

        <Form.Label htmlFor="registration-password">Password</Form.Label>
        <Form.Control type="password" id="registration-password" />

        <Form.Label htmlFor="registration-repeat-password">
          Repeat password
        </Form.Label>
        <Form.Control type="password" id="registration-repeat-password" />

        <Button as={Link} variant="secondary">
          Submit
        </Button>
      </div>
    </Container>
  );
}

export default RegistrationInput;
