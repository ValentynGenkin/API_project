import React, { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { default as useFetchAuth } from '../hooks/useFetch';
import '../styles/accountPage.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const AccountPage = () => {
  const navigation = useNavigate();
  const [authData, , authError, authFetchData] = useFetchAuth(
    `api/auth/account-authentication`,
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

  const date = () => {
    const date = new Date(authData.account.birthday);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate(); //

    return `${year}-${month}-${day}`;
  };
  return (
    <Container className="account-page-container">
      {authData && (
        <>
          <div className="account-block">
            <br />
            <h5>Account info</h5>
            <br />
            <div className="account-field">
              <span className="account-field-badge">First name</span>
              <span className="account-field-data">
                {authData.account.firstName}
              </span>
            </div>
            <div className="account-field">
              <span className="account-field-badge">Last name</span>
              <span className="account-field-data">
                {authData.account.lastName}
              </span>
            </div>
            <div className="account-field">
              <span className="account-field-badge">Email</span>
              <span className="account-field-data">
                {authData.account.email}
              </span>
            </div>
            <div className="account-field">
              <span className="account-field-badge">Birthday</span>
              <span className="account-field-data">{date()}</span>
            </div>
            <div className="account-field">
              <span className="account-field-badge">API Key</span>
              <span className="account-field-data">
                {authData.account.APIkey}
              </span>
            </div>
            <div className="account-page-btn">
              <Button
                variant="secondary"
                onClick={() => {
                  navigation(-1);
                }}
              >
                Back
              </Button>
              <Button variant="warning">Get new API key</Button>
              <Button variant="danger">Delete Account</Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default AccountPage;
