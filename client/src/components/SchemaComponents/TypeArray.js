import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import ObjInsideArray from './ObjInsideArray';
import Button from 'react-bootstrap/esm/Button';

const TypeArray = ({ arrayObjects, setArrayObjects }) => {
  const [objOption, setObjOption] = useState(null);
  const [arrayObject, setArrayObject] = useState(null);

  const [addKey, setAddKey] = useState([
    <ObjInsideArray setArrayObject={setArrayObject} />,
  ]);

  const arrayObjSaving = (index) => {
    let data = [...arrayObjects];
    data[index] = arrayObject;
    setArrayObjects(data);
  };

  useEffect(() => {
    if (arrayObject && objOption === 'Object') {
      arrayObjSaving(addKey.length - 1);
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
            <div key={index}>{obj}</div>
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
