import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import SchemaObj from '../components/SchemaComponents/SchemaObj';
import Example from '../components/SchemaComponents/Example';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../styles/schemaPage.css';
import { handleObject } from '../util/handleObject';
import { deleteLastItem } from '../util/deleteLastObj';
import JSONCheck from '../components/SchemaComponents/JSONCheck';
import pascalCase from 'pascalcase';
import useFetch from '../hooks/useFetch';
import Spinner from 'react-bootstrap/esm/Spinner';

import { default as useFetchAuth } from '../hooks/useFetch';
import { jsonForCheck } from '../util/jsonFormCheck';
import { useNavigate } from 'react-router-dom';
import CreatedSchema from '../components/CreatedSchema';

const SchemaPage = () => {
  const navigation = useNavigate();
  const [authData, , authError, authFetchData] = useFetchAuth(
    `api/auth/schema-authentication`,
  );

  useEffect(() => {
    authFetchData({
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);

  useEffect(() => {
    if (authError && !authError.success) {
      navigation('/');
    }
  }, [authError]);

  const [schemaForSave, setSchemaForSave] = useState([]);

  const [schemaName, setSchemaName] = useState(null);

  const [schemaObj, setSchemaObj] = useState(null);

  const [objIndex, setObjIndex] = useState(0);

  const [schemaError, setSchemaError] = useState(null);

  const [creationMsg, setCreationMsg] = useState(null);

  const [schemaComponent, setSchemaComponent] = useState([
    <SchemaObj setSchemaObj={setSchemaObj} />,
  ]);

  useEffect(() => {
    if (schemaObj) {
      handleObject(objIndex, schemaForSave, schemaObj, setSchemaForSave);
    }
  }, [schemaObj]);

  const [data, isLoading, error, fetchData] = useFetch(
    `api/schema/create-schema`,
  );

  const createSchema = () => {
    if (schemaObj && schemaName) {
      setSchemaError(null);
      fetchData({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          schemaName,
          data: `${jsonForCheck(schemaForSave)}`,
        }),
      });
    }
  };

  useEffect(() => {
    if (data && data.success) {
      setCreationMsg('Database schema created successfully');
    }
  }, [data]);

  useEffect(() => {
    if (creationMsg) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [creationMsg]);

  return (
    <Container className="schema-page-container">
      <Example />
      {authData &&
        (authData.success && authData.schema ? (
          <CreatedSchema schemaData={authData} nav={navigation} />
        ) : !creationMsg ? (
          <>
            <div className="schema-object-name">
              <InputGroup
                className="mb-3"
                onChange={(e) => {
                  const name = e.target.value;
                  setSchemaName(pascalCase(name));
                }}
              >
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Schema name
                </InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </div>
            <br />
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
            {schemaComponent.length <= 9 ? (
              <Button
                className="schema-constructor-btn"
                onClick={() => {
                  setSchemaComponent([
                    ...schemaComponent,
                    <SchemaObj setSchemaObj={setSchemaObj} />,
                  ]);
                }}
              >
                Add
              </Button>
            ) : null}

            {schemaComponent.length > 1 ? (
              <Button
                className="schema-constructor-btn"
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

            <JSONCheck jsonExample={<pre>{jsonForCheck(schemaForSave)}</pre>} />
            <Button
              className="schema-constructor-btn"
              variant="secondary"
              onClick={() => {
                if (!schemaName || !schemaObj) {
                  setSchemaError(
                    'Specify the schema name and the completed schema object',
                  );
                } else {
                  createSchema();
                }
              }}
            >
              {isLoading ? (
                <>
                  {' '}
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
                'Save Schema'
              )}
            </Button>
            {schemaError ? <p>{schemaError}</p> : null}
            {error ? <p>{error.msg.toString()}</p> : null}
          </>
        ) : (
          <div>{creationMsg}</div>
        ))}
    </Container>
  );
};

export default SchemaPage;
