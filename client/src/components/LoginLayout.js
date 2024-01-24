import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const LoginLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default LoginLayout;
