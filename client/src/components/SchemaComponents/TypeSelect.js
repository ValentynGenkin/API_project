import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import TypeString from './TypeString';
import TypeNumber from './TypeNumber';
import TypeArray from './TypeArray';
import TypeObj from './TypeObj';
import Button from 'react-bootstrap/esm/Button';

const TypeSelect = ({ ...props }) => {
  const { objOption, setObjOption } = props;

  const [addKey, setAddKey] = useState([<TypeObj />]);

  return (
    <div>
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

            {addKey.length > 1 ? (
              <Button
                onClick={() => {
                  if (addKey.length > 1) {
                    const updatedSchemaObj = addKey.slice(0, -1);
                    setAddKey(updatedSchemaObj);
                  }
                }}
              >
                - Delete Key
              </Button>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TypeSelect;
