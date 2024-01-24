import LoginForm from '../components/LoginForm';
import Container from 'react-bootstrap/esm/Container';
import React from 'react';

import '../styles/loginForm.css';

const MainPage = () => {
  return (
    <Container className="login-form-container">
      <LoginForm />
    </Container>
  );
};

export default MainPage;
