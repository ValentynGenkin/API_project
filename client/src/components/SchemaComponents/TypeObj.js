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
    if (type) {
      const data = `
      "${keyName}" : {
        ${type ? `"type" : "${type}"` : ''}
        ${required === 'True' ? `,"required" : "${required}"` : ''}
        ${uniq === 'True' ? `,"uniq" : "${uniq}"` : ''}},`;

      setObject(data);
    }
  }, [keyName, required, type, uniq]);

  return (
    <div style={{ marginLeft: '100px' }}>
      {`{`}
      <div className="schema-object-name">
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
        <span>{`: {`}</span>
      </div>
      <div style={{ marginLeft: '100px' }}>
        <div className="schema-select-container">
          <span>type : </span>
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
        <div className="schema-select-container">
          <span>required : </span>
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
        <div className="schema-select-container">
          <span>uniq : </span>
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
      </div>

      {`}`}
    </div>
  );
};

export default TypeObj;
