import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/esm/Spinner';

const CreateEndpoints = ({ setEndpointName, createFunc, loading }) => {
  const nav = useNavigate();

  return (
    <>
      <br />
      <h5>Create endpoints</h5>
      <div>
        <InputGroup
          className="mb-3"
          onChange={(e) => {
            const name = e.target.value;
            setEndpointName(name);
          }}
        >
          <InputGroup.Text id="inputGroup-sizing-sm">
            Endpoints name
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <Button
          className="schema-constructor-btn"
          variant="secondary"
          onClick={() => {
            createFunc();
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
    </>
  );
};

export default CreateEndpoints;
