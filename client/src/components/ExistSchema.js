import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import useFetch from '../hooks/useFetch';
import PopUp from './PopUp';
import { useNavigate } from 'react-router-dom';

const CreatedSchema = ({ schemaData, nav }) => {
  const [modalShow, setModalShow] = useState(false);
  const [password, setPassword] = useState(null);
  const [data, isLoading, error, fetchData] = useFetch(`api/schema/delete-api`);
  const navigation = useNavigate();

  const deleteSchema = () => {
    if (password) {
      fetchData({
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: `${password}` }),
      });
    }
  };

  useEffect(() => {
    if (data && data.success) {
      setTimeout(() => {
        navigation('/user-menu');
      }, 2000);
    }
  }, [data]);

  return (
    <>
      <div>
        <h6>Schema name: </h6>
        <p>{schemaData.schemaName}</p>
      </div>
      <div>
        <h6>DB Schema in JSON format: </h6>
        <pre>{schemaData.schema}</pre>
      </div>
      <div>
        <Button
          variant="secondary"
          className="schema-constructor-btn"
          onClick={() => {
            nav(-1);
          }}
        >
          Back
        </Button>
        <Button
          className="schema-constructor-btn"
          variant="danger"
          onClick={() => setModalShow(true)}
        >
          Delete API
        </Button>
      </div>
      <PopUp
        response={data}
        password={setPassword}
        loading={isLoading}
        error={error}
        deleteFunc={deleteSchema}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CreatedSchema;
