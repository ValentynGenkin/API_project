import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Spinner from 'react-bootstrap/esm/Spinner';

const APIDeleteBtn = ({ cb, loading }) => {
  return (
    <Button
      variant="danger"
      onClick={() => {
        cb();
      }}
    >
      {loading ? (
        <>
          {' '}
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="loading-spinner"
          />
          <span className="visually-hidden">Loading...</span>
        </>
      ) : (
        'Delete'
      )}
    </Button>
  );
};

export default APIDeleteBtn;
