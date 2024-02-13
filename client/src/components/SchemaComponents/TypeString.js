import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const TypeString = ({ setMinLength, setMaxLength }) => {
  return (
    <div>
      <div className="schema-option-container">
        <InputGroup
          size="sm"
          className="mb-3 schema-option-input"
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value)) {
              setMinLength(value);
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
              setMaxLength(value);
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

export default TypeString;
