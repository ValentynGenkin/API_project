import React from 'react';
import RegistrationInput from '../components/RegistrationInput';
import Container from 'react-bootstrap/Container';

import '../styles/registrationForm.css';

const RegistrationPage = () => {
  return (
    <Container className="registration-form-container">
      <RegistrationInput />
    </Container>
  );
};

export default RegistrationPage;
