import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import DefaultValue from './DefaultValue';
import RequiredSelect from './RequiredSelect';
import UniqSelect from './UniqSelect';
import DefaultSelect from './DefaultSelect';
import TypeSelect from './TypeSelect';

const SchemaObj = () => {
  const [objOption, setObjOption] = useState(null);
  const [defaultValue, setDefaultValue] = useState(null);

  return (
    <div style={{ width: '450px' }}>
      {`{`}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Object name
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        {`:`}

        <TypeSelect objOption={objOption} setObjOption={setObjOption} />

        {objOption === 'Object' ||
        objOption === 'Array' ||
        objOption === 'Select' ? null : (
          <>
            <RequiredSelect />
            <UniqSelect />
            <DefaultSelect props={setDefaultValue} />
            {defaultValue === 'Yes' ? <DefaultValue /> : null}
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
