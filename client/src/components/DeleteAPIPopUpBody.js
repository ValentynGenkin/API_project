import React from 'react';
import Form from 'react-bootstrap/Form';

const DeleteAPIPopUpBody = ({ setPassword }) => {
  return (
    <>
      <Form.Control
        type="password"
        id="schema-delete-password"
        aria-describedby="schema-delete-password-block"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Form.Text id="schema-delete-password-block" muted>
        Once the deletion is confirmed, your API, database entries and endpoints
        will be permanently deleted
      </Form.Text>
    </>
  );
};

export default DeleteAPIPopUpBody;
