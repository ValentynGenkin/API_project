import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const TypeObj = () => {
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
            <option value="3">Boolean</option>
            <option value="4">Date</option>
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            uniq :{' '}
          </span>
          <Form.Select aria-label="Default select example">
            <option>Select</option>
            <option value="1">True</option>
            <option value="2">False</option>
          </Form.Select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
            default :{' '}
          </span>
          <Form.Select aria-label="Default select example">
            <option>Select</option>
            <option value="1">No</option>
            <option value="2">Yes</option>
          </Form.Select>
        </div>
        {`},`}
      </div>
      <br />
      {`}`}
      <br />
      <Button>+ Add Key</Button>
    </div>
  );
};

export default TypeObj;
