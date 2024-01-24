import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar data-bs-theme="light" className="navigation">
      <Container>
        <Navbar.Brand as={Link}>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link}>Home</Nav.Link>
          <Nav.Link as={Link}>Schema</Nav.Link>
          <Nav.Link as={Link}>Endpoints</Nav.Link>
          <Nav.Link as={Link}>Account</Nav.Link>
        </Nav>
        <Nav.Link as={Link}>Sign out</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;
