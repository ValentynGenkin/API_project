import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import SchemaObj from '../components/SchemaComponents/SchemaObj';
import Example from '../components/SchemaComponents/Example';

import '../styles/schemaPage.css';
import { removeLastComma } from '../util/removeLastComma';
import { handleObject } from '../util/handleObject';
import { deleteLastItem } from '../util/deleteLastObj';

const SchemaPage = () => {
  const [schemaForSave, setSchemaForSave] = useState([]);

  const [schemaObj, setSchemaObj] = useState(null);

  const [objIndex, setObjIndex] = useState(0);

  const [schemaComponent, setSchemaComponent] = useState([
    <SchemaObj setSchemaObj={setSchemaObj} />,
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
          className="schema-page-obj"
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
            <SchemaObj setSchemaObj={setSchemaObj} />,
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
            if (schemaComponent.length === schemaForSave.length)
              deleteLastItem(schemaForSave, setSchemaForSave);
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
          console.log(aa);
          console.log(JSON.stringify(aa));
        }}
      >
        Save Schema
      </Button>
    </Container>
  );
};

export default SchemaPage;
