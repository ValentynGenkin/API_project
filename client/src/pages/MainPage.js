import LoginForm from '../components/LoginForm';
import Container from 'react-bootstrap/esm/Container';
import React from 'react';

import '../styles/loginForm.css';
import WelcomeTextBlock from '../components/WelcomeTextBlock';

const MainPage = () => {
  return (
    <Container className="login-form-container">
      <WelcomeTextBlock />
      <LoginForm />
    </Container>
  );
};

export default MainPage;
