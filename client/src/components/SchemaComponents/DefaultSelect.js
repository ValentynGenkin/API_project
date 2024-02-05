import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DefaultValue from './DefaultValue';

const DefaultSelect = () => {
  const [defaultValue, setDefaultValue] = useState(null);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
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
  );
};

export default DefaultSelect;
