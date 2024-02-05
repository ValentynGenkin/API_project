import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DefaultValue from './DefaultValue';

const DefaultSelect = ({ setDefaultValue }) => {
  const [defaultOption, setDefaultOption] = useState(null);

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
          setDefaultOption(option);
        }}
      >
        <option>Select</option>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </Form.Select>

      {defaultOption === 'Yes' ? (
        <DefaultValue
          defaultOption={defaultOption}
          setDefaultValue={setDefaultValue}
        />
      ) : null}
    </div>
  );
};

export default DefaultSelect;
