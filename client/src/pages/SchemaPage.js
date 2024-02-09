import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import SchemaObj from '../components/SchemaComponents/SchemaObj';
import Example from '../components/SchemaComponents/Example';

import '../styles/schemaPage.css';
import { removeLastComma } from '../util/removeLastComma';

const SchemaPage = () => {
  const [schemaForSave, setSchemaForSave] = useState([]);

  const [schemaObj, setSchemaObj] = useState(null);

  const [schemaComponent, setSchemaComponent] = useState([
    <SchemaObj schemaObj={schemaObj} setSchemaObj={setSchemaObj} />,
  ]);

  const arrayObjSaving = (index) => {
    let data = [...schemaForSave];
    data[index] = schemaObj;
    setSchemaForSave(data);
  };

  useEffect(() => {
    if (schemaObj) {
      arrayObjSaving(schemaComponent.length - 1);
    }
  }, [schemaObj]);

  return (
    <Container className="schema-page-container">
      <Example />
      {schemaComponent.map((obj, index) => (
        <div key={index}>{obj}</div>
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

          console.log(JSON.stringify(aa));
        }}
      >
        Save Schema
      </Button>
    </Container>
  );
};

export default SchemaPage;
