import React, { useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import camelCase from 'camelcase';

const ObjInsideArray = ({ setArrayObject }) => {
  const [keyName, setKeyName] = useState(null);

  const [type, setType] = useState(null);

  useEffect(() => {
    if (type) {
      const data = `
      "${keyName}" : {
        ${type ? `"type" : "${type}",` : ''}
      },
    `;

      setArrayObject(data);
    }
  }, [keyName, type]);

  return (
    <div style={{ width: '450px' }}>
      {`{`}
      <div style={{ display: 'flex' }}>
        <InputGroup
          size="sm"
          className="mb-3"
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
        {`:`}
      </div>
      <div style={{ marginLeft: '50px' }}>
        {`{`}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            type :{' '}
          </span>
          <Form.Select
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

        {`},`}
      </div>
      <br />
      {`}`}
      <br />
    </div>
  );
};

export default ObjInsideArray;
