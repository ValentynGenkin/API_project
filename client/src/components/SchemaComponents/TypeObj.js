import React, { useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import camelCase from 'camelcase';

const TypeObj = ({ setObject }) => {
  const [keyName, setKeyName] = useState(null);

  const [type, setType] = useState(null);
  const [required, setRequired] = useState(null);
  const [uniq, setUniq] = useState(null);

  useEffect(() => {
    const data = `
      "${keyName}" : {
        "type" : "${type}",
        "required" : "${required}",
        "uniq" : "${uniq}",
      },
    `;

    setObject(data);
  }, [keyName, required, type, uniq]);

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
            <option value="Boolean">Boolean</option>
            <option value="Date">Date</option>
          </Form.Select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            required :{' '}
          </span>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              const required = e.target.value;
              if (required !== 'Select') {
                setRequired(required);
              }
            }}
          >
            <option>Select</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </Form.Select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            uniq :{' '}
          </span>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              const uniq = e.target.value;
              if (uniq !== 'Select') {
                setUniq(uniq);
              }
            }}
          >
            <option>Select</option>
            <option value="True">True</option>
            <option value="False">False</option>
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

export default TypeObj;
