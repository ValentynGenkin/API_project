import React from 'react';
import Form from 'react-bootstrap/Form';

const UniqSelect = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>uniq : </span>
      <Form.Select aria-label="Default select example">
        <option>Select</option>
        <option value="True">True</option>
        <option value="False">False</option>
      </Form.Select>
    </div>
  );
};

export default UniqSelect;
