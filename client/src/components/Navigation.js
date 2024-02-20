import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import '../styles/navigation.css';

const Navigation = () => {
  return (
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
          <Nav.Link as={Link}>Endpoints</Nav.Link>
          <Nav.Link as={Link}>Statistics</Nav.Link>
          <Nav.Link as={Link}>Account</Nav.Link>
        </Nav>
        <Nav.Link>Sign out</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;
