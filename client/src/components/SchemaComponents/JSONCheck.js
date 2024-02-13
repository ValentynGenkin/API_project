import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';

const JSONCheck = ({ jsonExample }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="warning"
        className="schema-constructor-btn"
        onClick={handleShow}
      >
        JSON Check
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>JSON Check</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{jsonExample}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default JSONCheck;
