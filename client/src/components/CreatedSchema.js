import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';

import useFetch from '../hooks/useFetch';
import PopUp from './PopUp';

const CreatedSchema = ({ schemaData, nav }) => {
  const [modalShow, setModalShow] = useState(false);
  const [data, isLoading, error, fetchData] = useFetch(
    `api/schema/create-schema`,
  );

  const deleteSchema = () => {
    fetchData({
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });
  };

  return (
    <>
      <p>{schemaData.schemaName}</p>
      <pre>{schemaData.schema}</pre>
      <Button
        onClick={() => {
          nav(-1);
        }}
      >
        Back
      </Button>
      <Button variant="danger" onClick={() => setModalShow(true)}>
        Delete Schema
      </Button>
      <PopUp show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CreatedSchema;
