import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/navigation.css';
import useFetch from '../hooks/useFetch';
import Spinner from 'react-bootstrap/esm/Spinner';

const Navigation = () => {
  const [data, isLoading, error, fetchData] = useFetch(`api/auth/logout`);

  const navigation = useNavigate();

  const logout = () => {
    fetchData({
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  useEffect(() => {
    if (data && data.success) {
      navigation('/');
    }
    console.log(data);
  }, [data]);

  return (
    <>
      <Navbar data-bs-theme="light" className="navigation">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/user-menu'}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={'schema'}>
              Schema
            </Nav.Link>
            <Nav.Link as={Link} to={'endpoint'}>
              Endpoints
            </Nav.Link>
            <Nav.Link as={Link}>Statistics</Nav.Link>
            <Nav.Link as={Link}>Account</Nav.Link>
          </Nav>
          <Nav.Link
            onClick={() => {
              logout();
            }}
          >
            {isLoading ? (
              <>
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
              'Sign out'
            )}
          </Nav.Link>
        </Container>
      </Navbar>
      {error && <p>{error.msg}</p>}
    </>
  );
};

export default Navigation;
