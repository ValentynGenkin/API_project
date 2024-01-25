import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import '../styles/userWelcomePage.css';
import UserWelcomeCards from '../components/UserWelcomeCards';
import UserTextBlock from '../components/UserTextBlock';

const UserWelcomePage = () => {
  return (
    <Container className="user-welcome-page-container">
      <UserTextBlock />
      <UserWelcomeCards />
    </Container>
  );
};

export default UserWelcomePage;
