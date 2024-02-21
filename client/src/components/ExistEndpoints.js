import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const ExistEndpoints = () => {
  const nav = useNavigate();
  return (
    <>
      <br />
      <h5>Endpoints</h5>
      <p>Create</p>
      <p>
        method: POST, Request: {process.env.REACT_APP_DEV_SERVER}:endpoint/add
      </p>
      <p>Get all</p>
      <p>
        method: GET, Request: {process.env.REACT_APP_DEV_SERVER}:endpoint/GET
      </p>
      <p>Get one by ID</p>
      <p>
        method: GET, Request: {process.env.REACT_APP_DEV_SERVER}
        :endpoint/get/?id=ITEM_ID
      </p>
      <p>Update one by ID</p>
      <p>
        method: PUT, Request: {process.env.REACT_APP_DEV_SERVER}
        :endpoint/update/?id=ITEM_ID
      </p>
      <p>Delete one by ID</p>
      <p>
        method: DELETE, Request: {process.env.REACT_APP_DEV_SERVER}
        :endpoint/delete/?id=ITEM_ID
      </p>
      <p>Request example</p>
      <pre>
        {`
  JavaScript and Fetch API:

  fetch(${process.env.REACT_APP_DEV_SERVER}:endpoint/GET ,{
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
  
  JavaScript and Axios:

  try {
    const response = await axios.post(${process.env.REACT_APP_DEV_SERVER}:endpoint/add, {
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
      <div>
        <Button>Delete</Button>
        <Button
          onClick={() => {
            nav(-1);
          }}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default ExistEndpoints;
