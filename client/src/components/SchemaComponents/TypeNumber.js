import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const TypeNumber = ({
  setMinNumValue,
  setMaxNumValue,
  setMinNumLength,
  setMaxNumLength,
}) => {
  return (
    <div>
      <div className="schema-option-container">
        <InputGroup
          size="sm"
          className="mb-3 schema-option-input"
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value)) {
              setMinNumValue(value);
            }
          }}
        >
          <InputGroup.Text id="inputGroup-sizing-sm">Min value</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup
          size="sm"
          className="mb-3 schema-option-input"
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value)) {
              setMaxNumValue(value);
            }
          }}
        >
          <InputGroup.Text id="inputGroup-sizing-sm">Max value</InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </div>
      <div className="schema-option-container">
        <InputGroup
          size="sm"
          className="mb-3 schema-option-input"
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value)) {
              setMinNumLength(value);
            }
          }}
        >
          <InputGroup.Text id="inputGroup-sizing-sm">
            Min length
          </InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup
          size="sm"
          className="mb-3 schema-option-input"
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value)) {
              setMaxNumLength(value);
            }
          }}
        >
          <InputGroup.Text id="inputGroup-sizing-sm">
            Max length
          </InputGroup.Text>
          <Form.Control
            type="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </div>
      <p>If you don't need these options, ignore them</p>
    </div>
  );
};

export default TypeNumber;
