import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import DefaultSelect from './DefaultSelect';
import DefaultValue from './DefaultValue';

const ObjInsideArray = () => {
  const [defaultValue, setDefaultValue] = useState(null);
  return (
    <div style={{ width: '450px' }}>
      {`{`}
      <div style={{ display: 'flex' }}>
        <InputGroup size="sm" className="mb-3">
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
          <Form.Select aria-label="Default select example">
            <option>Select</option>
            <option value="1">String</option>
            <option value="2">Number</option>
          </Form.Select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            required :{' '}
          </span>
          <Form.Select aria-label="Default select example">
            <option>Select</option>
            <option value="1">True</option>
            <option value="2">False</option>
          </Form.Select>
        </div>

        <DefaultSelect props={setDefaultValue} />
        {defaultValue === 'Yes' ? <DefaultValue /> : null}

        {`},`}
      </div>
      <br />
      {`}`}
      <br />
    </div>
  );
};

export default ObjInsideArray;
