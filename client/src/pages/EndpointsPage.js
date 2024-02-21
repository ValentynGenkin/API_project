import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import '../styles/endpointsPage.css';
import CreateEndpoints from '../components/CreateEndpoints';
import ExistEndpoints from '../components/ExistEndpoints';

const EndpointsPage = () => {
  return (
    <Container className="endpoints-page-container">
      <CreateEndpoints />
      <ExistEndpoints />
    </Container>
  );
};

export default EndpointsPage;
