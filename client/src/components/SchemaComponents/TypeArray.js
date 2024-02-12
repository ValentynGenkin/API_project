import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import ObjInsideArray from './ObjInsideArray';
import Button from 'react-bootstrap/esm/Button';
import { handleObject } from '../../util/handleObject';
import { deleteLastItem } from '../../util/deleteLastObj';

const TypeArray = ({ arrayObjects, setArrayObjects }) => {
  const [objOption, setObjOption] = useState(null);
  const [arrayObject, setArrayObject] = useState(null);
  const [objIndex, setObjIndex] = useState(0);

  const [addKey, setAddKey] = useState([
    <ObjInsideArray setArrayObject={setArrayObject} />,
  ]);

  useEffect(() => {
    if (arrayObject && objOption === 'Object') {
      handleObject(objIndex, arrayObjects, arrayObject, setArrayObjects);
    }
    if (objOption === 'Number' || objOption === 'String') {
      setArrayObjects(`"${objOption}"`);
    }
  }, [arrayObject, objOption]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '250px',
      }}
    >
      {`[`}
      <span style={{ whiteSpace: 'nowrap', marginRight: '5px' }}>type : </span>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          setObjOption(e.target.value);

          if (e.target.value === 'Object') {
            setAddKey([<ObjInsideArray setArrayObject={setArrayObject} />]);
            setArrayObjects([]);
          }
        }}
      >
        <option>Select</option>
        <option value="String">String</option>
        <option value="Number">Number</option>
        <option value="Object">Object</option>
      </Form.Select>

      {objOption === 'Object' ? (
        <>
          {addKey.map((obj, index) => (
            <div
              key={index}
              onChange={() => {
                setObjIndex(index);
              }}
            >
              {obj}
            </div>
          ))}
          {addKey.length <= 2 ? (
            <Button
              onClick={() => {
                setAddKey([
                  ...addKey,
                  <ObjInsideArray setArrayObject={setArrayObject} />,
                ]);
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
                if (addKey.length === arrayObjects.length)
                  deleteLastItem(arrayObjects, setArrayObjects);
              }}
            >
              - Delete Key
            </Button>
          ) : null}
        </>
      ) : null}

      {`]`}
    </div>
  );
};

export default TypeArray;
