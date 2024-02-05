import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const TypeString = ({ setMinLength, setMaxLength }) => {
  return (
    <div>
      <div
        style={{
          width: '400px',
          display: 'flex',
          gap: '10px',
          margin: '10px 0',
        }}
      >
        <InputGroup
          size="sm"
          className="mb-3"
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
          className="mb-3"
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
      <p> If you don'y need this options use - N/A</p>
    </div>
  );
};

export default TypeString;
