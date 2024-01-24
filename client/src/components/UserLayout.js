import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <>
      <Navigation />

      <Outlet />

      <Footer />
    </>
  );
};

export default UserLayout;
