import React, { useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import camelCase from 'camelcase';

const ObjInsideArray = ({ setArrayObject }) => {
  const [keyName, setKeyName] = useState(null);

  const [type, setType] = useState(null);

  useEffect(() => {
    if (type) {
      const data = `"${keyName}" : "${type}",`;

      setArrayObject(data);
    }
  }, [keyName, type]);

  return (
    <div className="schema-array-object-block">
      <div className="schema-array-object-key-name">
        <InputGroup
          size="sm"
          className=""
          onChange={(e) => {
            const name = camelCase(e.target.value);
            setKeyName(name);
          }}
        >
          <InputGroup.Text id="inputGroup-sizing-sm">Key name</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </div>
      <div className="schema-array-object-select">
        <span>type : </span>
        <Form.Select
          size="sm"
          aria-label="Default select example"
          onChange={(e) => {
            const type = e.target.value;
            if (type !== 'Select') {
              setType(type);
            }
          }}
        >
          <option>Select</option>
          <option value="String">String</option>
          <option value="Number">Number</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default ObjInsideArray;
