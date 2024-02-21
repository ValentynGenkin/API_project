import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const CreateEndpoints = () => {
  const nav = useNavigate();
  const [endpointName, setEndpointName] = useState(null);

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
        <Button>Create</Button>
        <Button
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
