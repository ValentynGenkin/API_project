import React from 'react';
import Form from 'react-bootstrap/Form';

const UniqSelect = ({ props }) => {
  return (
    <div className="schema-select-container">
      <span>uniq : </span>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          const data = e.target.value;

          if (data !== 'Select') {
            props(data);
          } else {
            props(null);
          }
        }}
      >
        <option>Select</option>
        <option value="True">True</option>
        <option value="False">False</option>
      </Form.Select>
    </div>
  );
};

export default UniqSelect;
