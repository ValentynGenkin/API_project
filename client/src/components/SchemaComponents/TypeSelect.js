import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import TypeString from './TypeString';
import TypeNumber from './TypeNumber';
import TypeArray from './TypeArray';
import TypeObj from './TypeObj';
import Button from 'react-bootstrap/esm/Button';
import { handleObject } from '../../util/handleObject';
import { deleteLastItem } from '../../util/deleteLastObj';

const TypeSelect = ({ ...props }) => {
  const {
    objOption,
    setObjOption,
    setMinLength,
    setMaxLength,
    setMinNumValue,
    setMaxNumValue,
    setMinNumLength,
    setMaxNumLength,
    objectsArray,
    setObjectsArray,
    arrayObjects,
    setArrayObjects,
  } = props;

  const [object, setObject] = useState(null);

  const [objIndex, setObjIndex] = useState(0);

  const [addKey, setAddKey] = useState([<TypeObj setObject={setObject} />]);

  useEffect(() => {
    if (object) {
      handleObject(objIndex, objectsArray, object, setObjectsArray);
    }
  }, [object]);

  return (
    <div>
      <div className="schema-select-container">
        <span>type : </span>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            const type = e.target.value;
            setObjOption(type);

            if (type === 'Object') {
              setAddKey([<TypeObj setObject={setObject} />]);
              setObjectsArray([]);
            }
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
      </div>
      {objOption === 'String' ? (
        <TypeString setMaxLength={setMaxLength} setMinLength={setMinLength} />
      ) : null}
      {objOption === 'Number' ? (
        <TypeNumber
          setMaxNumLength={setMaxNumLength}
          setMinNumLength={setMinNumLength}
          setMaxNumValue={setMaxNumValue}
          setMinNumValue={setMinNumValue}
        />
      ) : null}
      {objOption === 'Array' ? (
        <TypeArray
          arrayObjects={arrayObjects}
          setArrayObjects={setArrayObjects}
        />
      ) : null}
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
              className="schema-constructor-btn"
              variant="outline-secondary"
              onClick={() => {
                setAddKey([...addKey, <TypeObj setObject={setObject} />]);
              }}
            >
              + Add Key
            </Button>
          ) : null}

          {addKey.length > 1 ? (
            <Button
              className="schema-constructor-btn"
              variant="outline-secondary"
              onClick={() => {
                if (addKey.length > 1) {
                  const updatedSchemaObj = addKey.slice(0, -1);
                  setAddKey(updatedSchemaObj);
                }
                if (addKey.length === objectsArray.length)
                  deleteLastItem(objectsArray, setObjectsArray);
              }}
            >
              - Delete Key
            </Button>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default TypeSelect;
