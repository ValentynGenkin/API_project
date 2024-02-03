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
        Add
      </Button>

      {schemaObj.length > 1 ? (
        <Button
          onClick={() => {
            if (schemaObj.length > 1) {
              const updatedSchemaObj = schemaObj.slice(0, -1);
              setSchemaObj(updatedSchemaObj);
            }
          }}
        >
          Delete
        </Button>
      ) : null}
      <Button variant="warning">JSON Check</Button>
      <Button variant="secondary">Save Schema</Button>
    </Container>
  );
};

export default SchemaPage;
