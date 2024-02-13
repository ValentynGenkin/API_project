import React from 'react';
import Form from 'react-bootstrap/Form';
import DefaultValue from './DefaultValue';

const DefaultSelect = ({
  setDefaultValue,
  defaultOption,
  setDefaultOption,
}) => {
  return (
    <>
      <div className="schema-select-container">
        <span>default : </span>
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
      </div>
      {defaultOption === 'Yes' ? (
        <DefaultValue
          defaultOption={defaultOption}
          setDefaultValue={setDefaultValue}
        />
      ) : null}
    </>
  );
};

export default DefaultSelect;
