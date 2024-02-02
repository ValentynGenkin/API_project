import React from 'react';
import Form from 'react-bootstrap/Form';

const TypeArray = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '250px' }}>
      {`[`}
      <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>type : </span>
      <Form.Select aria-label="Default select example">
        <option>Select</option>
        <option value="1">String</option>
        <option value="2">Number</option>
        <option value="3">Object</option>
      </Form.Select>
      {`]`}
    </div>
  );
};

export default TypeArray;
