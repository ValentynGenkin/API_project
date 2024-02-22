import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { default as useFetchAuth } from '../hooks/useFetch';
import '../styles/statisticsPage.css';
import { useNavigate } from 'react-router-dom';

const StatisticsPage = () => {
  const navigation = useNavigate();
  const [authData, , authError, authFetchData] = useFetchAuth(
    `api/auth/statistics-authentication`,
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

  return (
    <Container className="statistics-page-container">
      <br />

      {authData &&
        (authData.statistics ? (
          <>
            <h5>You can enter 1000 records into the database</h5>
            <br />
            <p>Used records: {authData.statistics}/1000</p>
          </>
        ) : (
          <p>There are no entries at the moment</p>
        ))}
    </Container>
  );
};

export default StatisticsPage;
