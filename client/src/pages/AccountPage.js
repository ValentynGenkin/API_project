import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import useFetch, { default as useFetchAuth } from '../hooks/useFetch';
import '../styles/accountPage.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PopUp from '../components/PopUp';
import APIDeleteBtn from '../components/APIDeleteBtn';
import DeleteAPIPopUpBody from '../components/DeleteAPIPopUpBody';
import NewAPIKeyBtn from '../components/NewAPIkeyBtn';

const AccountPage = () => {
  const [password, setPassword] = useState(null);
  const [modalShow, setModalShow] = useState(false);
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
  const [data, isLoading, error, fetchData] = useFetch(`api/auth/delete-user`);

  const deleteAccount = () => {
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
        navigation('/');
      }, 2000);
    }
  }, [data]);

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
              <NewAPIKeyBtn />
              <Button variant="danger" onClick={() => setModalShow(true)}>
                Delete Account
              </Button>
            </div>
          </div>
          <PopUp
            title={'Delete user account'}
            btn={<APIDeleteBtn loading={isLoading} cb={deleteAccount} />}
            response={data}
            body={<DeleteAPIPopUpBody setPassword={setPassword} />}
            error={error}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      )}
    </Container>
  );
};

export default AccountPage;
