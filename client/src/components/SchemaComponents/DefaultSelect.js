import React from 'react';
import Form from 'react-bootstrap/Form';

const DefaultSelect = ({ props }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>
        default :{' '}
      </span>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          const option = e.target.value;
          props(option);
        }}
      >
        <option>Select</option>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </Form.Select>
    </div>
  );
};

export default DefaultSelect;
