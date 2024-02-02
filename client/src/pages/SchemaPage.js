import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import SchemaObj from '../components/SchemaComponents/SchemaObj';
import Example from '../components/SchemaComponents/Example';

import '../styles/schemaPage.css';

const SchemaPage = () => {
  return (
    <Container className="schema-page-container">
      <Example />
      <SchemaObj />

      <Button variant="warning">JSON Check</Button>
      <Button variant="secondary">Save Schema</Button>
    </Container>
  );
};

export default SchemaPage;
