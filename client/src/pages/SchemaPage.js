import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import SchemaObj from '../components/SchemaComponents/SchemaObj';
import Example from '../components/SchemaComponents/Example';

import '../styles/schemaPage.css';
import { removeLastComma } from '../util/removeLastComma';
import { handleObject } from '../util/handleObject';

const SchemaPage = () => {
  const [schemaForSave, setSchemaForSave] = useState([]);

  const [schemaObj, setSchemaObj] = useState(null);
  const [objIndex, setObjIndex] = useState(0);

  const [schemaComponent, setSchemaComponent] = useState([
    <SchemaObj schemaObj={schemaObj} setSchemaObj={setSchemaObj} />,
  ]);

  useEffect(() => {
    if (schemaObj) {
      handleObject(objIndex, schemaForSave, schemaObj, setSchemaForSave);
    }
  }, [schemaObj]);

  return (
    <Container className="schema-page-container">
      <Example />
      {schemaComponent.map((obj, index) => (
        <div
          key={index}
          onChange={() => {
            setObjIndex(index);
          }}
        >
          {obj}
        </div>
      ))}
      <Button
        onClick={() => {
          setSchemaComponent([
            ...schemaComponent,
            <SchemaObj schemaObj={schemaObj} setSchemaObj={setSchemaObj} />,
          ]);
        }}
      >
        Add
      </Button>

      {schemaComponent.length > 1 ? (
        <Button
          onClick={() => {
            if (schemaComponent.length > 1) {
              const updatedSchemaObj = schemaComponent.slice(0, -1);
              setSchemaComponent(updatedSchemaObj);
            }
          }}
        >
          Delete
        </Button>
      ) : null}
      <Button variant="warning">JSON Check</Button>
      <Button
        variant="secondary"
        onClick={() => {
          const aa = JSON.parse(
            `{${removeLastComma(schemaForSave.join(''))}} `,
          );
        }}
      >
        Save Schema
      </Button>
    </Container>
  );
};

export default SchemaPage;
