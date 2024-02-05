import React, { useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import RequiredSelect from './RequiredSelect';
import UniqSelect from './UniqSelect';
import DefaultSelect from './DefaultSelect';
import TypeSelect from './TypeSelect';
import camelCase from 'camelcase';

const SchemaObj = () => {
  const [objOption, setObjOption] = useState(null);

  const [objName, setObjName] = useState(null);

  const [schemaObj, setSchemaObj] = useState({});

  const [minLength, setMinLength] = useState(null);
  const [maxLength, setMaxLength] = useState(null);

  const [minNumValue, setMinNumValue] = useState(null);
  const [maxNumValue, setMaxNumValue] = useState(null);
  const [minNumLength, setMinNumLength] = useState(null);
  const [maxNumLength, setMaxNumLength] = useState(null);

  const [required, setRequired] = useState(null);

  const [uniq, setUniq] = useState(null);

  useEffect(() => {
    const data =
      objOption !== 'Select'
        ? `{
       "type": "${objOption}",
      ${required === 'True' ? '"required": true,' : ''}
      ${uniq === 'True' ? '"uniq": true,' : ''}
      ${
        objOption === 'String' && minLength
          ? `"minlength": [${minLength}],`
          : ''
      }
      ${
        objOption === 'String' && maxLength
          ? `"maxlength": [${maxLength}],`
          : ''
      }
      ${
        objOption === 'Number' && maxNumLength
          ? `"maxlength": [${maxNumLength}],`
          : ''
      }
      ${
        objOption === 'Number' && minNumLength
          ? `"minlength": [${minNumLength}],`
          : ''
      }
      ${objOption === 'Number' && minNumValue ? `"min": [${minNumValue}],` : ''}
      ${objOption === 'Number' && maxNumValue ? `"max": [${maxNumValue}],` : ''}
}`
        : null;

    setSchemaObj(`${objName} ${data}`);
    console.log(schemaObj);
  }, [
    maxLength,
    maxNumLength,
    maxNumValue,
    minLength,
    minNumLength,
    minNumValue,
    objOption,
    objName,
    schemaObj,
    required,
    uniq,
  ]);

  return (
    <div style={{ width: '450px' }}>
      {`{`}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <InputGroup
          size="sm"
          className="mb-3"
          onChange={(e) => {
            const name = e.target.value;
            setObjName(`"${camelCase(name)}":`);
          }}
        >
          <InputGroup.Text id="inputGroup-sizing-sm">
            Object name
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        {`:`}

        <TypeSelect
          objOption={objOption}
          setObjOption={setObjOption}
          setMaxLength={setMaxLength}
          setMinLength={setMinLength}
          setMaxNumLength={setMaxNumLength}
          setMinNumLength={setMinNumLength}
          setMaxNumValue={setMaxNumValue}
          setMinNumValue={setMinNumValue}
        />

        {objOption === 'Object' ||
        objOption === 'Array' ||
        objOption === 'Select' ? null : (
          <>
            <RequiredSelect props={setRequired} />
            <UniqSelect props={setUniq} />
            <DefaultSelect />
          </>
        )}
        {`},`}
      </div>
      <br />
      {`},`}
      <br />
    </div>
  );
};

export default SchemaObj;
