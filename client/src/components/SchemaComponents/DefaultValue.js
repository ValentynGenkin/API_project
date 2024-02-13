import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const DefaultValue = ({ defaultOption, setDefaultValue }) => {
  return (
    <>
      <div>
        <InputGroup
          size="sm"
          className="mb-3 schema-default-input"
          onChange={(e) => {
            if (defaultOption === 'Yes') {
              setDefaultValue(e.target.value);
            } else {
              setDefaultValue(null);
            }
          }}
        >
          <InputGroup.Text id="inputGroup-sizing-sm">
            Default value
          </InputGroup.Text>
          <Form.Control
            type="text"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </div>
      <p>You can use a boolean value (true, false) or any string or number</p>
    </>
  );
};

export default DefaultValue;
