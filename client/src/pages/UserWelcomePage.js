import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import '../styles/userWelcomePage.css';
import { default as useFetchAuth } from '../hooks/useFetch';
import UserWelcomeCards from '../components/UserWelcomeCards';
import UserTextBlock from '../components/UserTextBlock';

const UserWelcomePage = () => {
  const navigation = useNavigate();
  const [authData, , authError, authFetchData] = useFetchAuth(
    `/api/auth/authentication`,
  );

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
    if (authError && !authError.success) {
      navigation('/');
    }
  }, [authError]);

  return (
    <Container className="user-welcome-page-container">
      {authData && (
        <>
          {' '}
          <UserTextBlock />
          <UserWelcomeCards />
        </>
      )}
    </Container>
  );
};

export default UserWelcomePage;
