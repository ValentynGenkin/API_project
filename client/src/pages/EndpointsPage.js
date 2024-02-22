import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';

import '../styles/endpointsPage.css';
import CreateEndpoints from '../components/CreateEndpoints';
import ExistEndpoints from '../components/ExistEndpoints';
import useFetch from '../hooks/useFetch';
import { default as useFetchAuth } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const EndpointsPage = () => {
  const navigation = useNavigate();
  const [authData, , authError, authFetchData] = useFetchAuth(
    `api/auth/endpoint-authentication`,
  );

  useEffect(() => {
    authFetchData({
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);

  useEffect(() => {
    if (authError && !authError.success) {
      navigation('/');
    }
  }, [authError]);

  const [endpointName, setEndpointName] = useState(null);

  const [data, isLoading, error, fetchData] = useFetch(
    `api/schema/create-endpoints`,
  );

  const createEndpoints = () => {
    if (endpointName) {
      fetchData({
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ endpointName: `${endpointName}` }),
      });
    }
  };

  useEffect(() => {
    if (data && data.success) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [data]);

  return (
    <Container className="endpoints-page-container">
      {authData &&
        (authData.success && authData.endpointName ? (
          <ExistEndpoints endpointName={authData.endpointName} />
        ) : (
          <CreateEndpoints
            endpointName={endpointName}
            loading={isLoading}
            createFunc={createEndpoints}
            setEndpointName={setEndpointName}
          />
        ))}
      {data && <p>{data.msg}</p>}
      {error && <p>{error.msg}</p>}
    </Container>
  );
};

export default EndpointsPage;
