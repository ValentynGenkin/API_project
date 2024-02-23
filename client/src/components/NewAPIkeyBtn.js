import React, { useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import useFetch from '../hooks/useFetch';
import Spinner from 'react-bootstrap/esm/Spinner';

const NewAPIKeyBtn = () => {
  const [data, isLoading, error, fetchData] = useFetch(`api/auth/new-api-key`);

  const getNewKey = () => {
    fetchData({
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  useEffect(() => {
    if (data && data.success) {
      window.location.reload();
    }
  }, [data]);

  return (
    <>
      <Button
        variant="warning"
        onClick={() => {
          getNewKey();
        }}
      >
        {isLoading ? (
          <>
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
          'Get new API key'
        )}
      </Button>
      {error && <p>{error.msg}</p>}
    </>
  );
};
export default NewAPIKeyBtn;
