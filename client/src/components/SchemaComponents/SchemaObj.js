import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import TypeString from './TypeString';
import TypeNumber from './TypeNumber';
import TypeArray from './TypeArray';
import TypeObj from './TypeObj';
import DefaultValue from './DefaultValue';
import Button from 'react-bootstrap/esm/Button';

const SchemaObj = () => {
  const [objOption, setObjOption] = useState(null);
  const [defaultValue, setDefaultValue] = useState(null);
  const [addKey, setAddKey] = useState([<TypeObj />]);

  return (
    <div style={{ width: '450px' }}>
      {`{`}
      <div style={{ display: 'flex' }}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Object name
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        {`:`}
      </div>
      <div style={{ marginLeft: '50px' }}>
        {`{`}
        <div>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            type :{' '}
          </span>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              const type = e.target.value;
              setObjOption(type);
            }}
          >
            <option>Select</option>
            <option value="String">String</option>
            <option value="Number">Number</option>
            <option value="Boolean">Boolean</option>
            <option value="Date">Date</option>
            <option value="Array">Array</option>
            <option value="Object">Object</option>
          </Form.Select>

          {objOption === 'String' ? <TypeString /> : null}
          {objOption === 'Number' ? <TypeNumber /> : null}
          {objOption === 'Array' ? <TypeArray /> : null}
          {objOption === 'Object' ? (
            <>
              {addKey.map((obj, index) => (
                <div key={index}>{obj}</div>
              ))}
              {addKey.length <= 3 ? (
                <Button
                  onClick={() => {
                    setAddKey([...addKey, <TypeObj />]);
                  }}
                >
                  + Add Key
                </Button>
              ) : null}
            </>
          ) : null}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            required :{' '}
          </span>
          <Form.Select aria-label="Default select example">
            <option>Select</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </Form.Select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            uniq :{' '}
          </span>
          <Form.Select aria-label="Default select example">
            <option>Select</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </Form.Select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            default :{' '}
          </span>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              const option = e.target.value;
              setDefaultValue(option);
            }}
          >
            <option>Select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </Form.Select>

          {defaultValue === 'Yes' ? <DefaultValue /> : null}
        </div>
        {`},`}
      </div>
      <br />
      {`}`}
      <br />
    </div>
  );
};

export default SchemaObj;
