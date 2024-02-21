import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PopUp from './PopUp';

const ExistEndpoints = ({ endpointName }) => {
  const [data, isLoading, error, fetchData] = useFetch(`api/schema/delete-api`);
  const navigation = useNavigate();
  const [password, setPassword] = useState(null);
  const [modalShow, setModalShow] = useState(false);

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
      <br />
      <h5>Endpoints</h5>
      <div className="exist-endpoints-block">
        <div className="exist-endpoint">
          <span>Create</span>
          <p className="exist-endpoint-method">
            method: <b>POST</b>{' '}
          </p>
          <p>
            Request: {process.env.REACT_APP_DEV_SERVER}
            {endpointName}/add
          </p>
        </div>
        <div className="exist-endpoint">
          <span>Get all</span>
          <p className="exist-endpoint-method">
            method: <b>GET</b>
          </p>
          <p>
            Request: {process.env.REACT_APP_DEV_SERVER}
            {endpointName}/get
          </p>
        </div>
        <div className="exist-endpoint">
          <span>Get one by ID</span>
          <p className="exist-endpoint-method">
            method: <b>GET</b>
          </p>
          <p>
            Request: {process.env.REACT_APP_DEV_SERVER}
            {endpointName}
            /get/?id=ITEM_ID
          </p>
        </div>
        <div className="exist-endpoint">
          <span>Update one by ID</span>
          <p className="exist-endpoint-method">
            method: <b> PUT</b>
          </p>
          <p>
            Request: {process.env.REACT_APP_DEV_SERVER}
            {endpointName}
            /update/?id=ITEM_ID
          </p>
        </div>
        <div className="exist-endpoint">
          {' '}
          <span>Delete one by ID</span>
          <p className="exist-endpoint-method">
            method: <b>DELETE</b>
          </p>
          <p>
            Request: {process.env.REACT_APP_DEV_SERVER}
            {endpointName}
            /delete/?id=ITEM_ID
          </p>
        </div>
      </div>
      <h5>Request example</h5>

      <div className="fetch-example-block">
        <pre className="fetch-example">
          {`
  JavaScript and Fetch API:

  fetch(${process.env.REACT_APP_DEV_SERVER}${endpointName}/GET ,{
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer API_KEY' 
    }
  })
  .then(response => {

    return response.json()

  }) ... 
  `}
        </pre>
        <pre className="fetch-example">
          {`
  JavaScript and Axios:

  try {
    const response = await axios.post(${process.env.REACT_APP_DEV_SERVER}${endpointName}/add, {
      {
        data: {
        request body according to your schema
      }
    },
      {
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer API_KEY'
      }
    }
    });

    return response.json()

  } catch (error) {
    ...
  }
  `}
        </pre>
      </div>
      <div>
        <Button
          className="schema-constructor-btn"
          variant="danger"
          onClick={() => setModalShow(true)}
        >
          Delete API
        </Button>
        <Button className="schema-constructor-btn" variant="warning">
          Update
        </Button>
        <Button
          className="schema-constructor-btn"
          onClick={() => {
            navigation(-1);
          }}
        >
          Back
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

export default ExistEndpoints;
