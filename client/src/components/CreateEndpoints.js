import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/esm/Spinner';

const CreateEndpoints = ({
  endpointName,
  setEndpointName,
  createFunc,
  loading,
}) => {
  const nav = useNavigate();
  const [inputError, setInputError] = useState(null);

  const containsOnlyLetters = (text) => {
    const pattern = /^[A-Za-z]{3,15}$/;
    return pattern.test(text);
  };

  return (
    <>
      <br />
      <h5>Create endpoints</h5>
      <br />
      <div>
        <InputGroup
          className="mb-3"
          onChange={(e) => {
            const name = e.target.value;

            setEndpointName(name.toLowerCase());
          }}
        >
          <InputGroup.Text id="inputGroup-sizing-sm">
            Endpoints name
          </InputGroup.Text>
          <Form.Control
            id="password-input"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <p style={{ fontSize: '15px', color: 'grey' }}>
          Endpoint name must be 3-15 characters long, contain only letters, and
          must not contain spaces, special characters, or emoji.
        </p>
        <Button
          className="schema-constructor-btn"
          variant="secondary"
          onClick={() => {
            if (containsOnlyLetters(endpointName)) {
              setInputError(null);
              createFunc();
            } else {
              setInputError('Check endpoint name');
            }
          }}
        >
          {loading ? (
            <>
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
            'Create'
          )}
        </Button>
        <Button
          className="schema-constructor-btn"
          onClick={() => {
            nav(-1);
          }}
        >
          Back
        </Button>
      </div>
      {inputError && <p>{inputError}</p>}
    </>
  );
};

export default CreateEndpoints;
