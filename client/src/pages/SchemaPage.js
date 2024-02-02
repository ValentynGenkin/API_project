import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import SchemaObj from '../components/SchemaComponents/SchemaObj';
import Example from '../components/SchemaComponents/Example';

import '../styles/schemaPage.css';

const SchemaPage = () => {
  const [schemaObj, setSchemaObj] = useState([<SchemaObj />]);
  return (
    <Container className="schema-page-container">
      <Example />
      {schemaObj.map((obj, index) => (
        <div key={index}>{obj}</div>
      ))}
      <Button
        onClick={() => {
          setSchemaObj([...schemaObj, <SchemaObj />]);
        }}
      >
        Add Object
      </Button>
      <Button variant="warning">JSON Check</Button>
      <Button variant="secondary">Save Schema</Button>
    </Container>
  );
};

export default SchemaPage;
