import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginLayout from './components/LoginLayout';
import MainPage from './pages/MainPage';
import RegistrationPage from './pages/RegistrationPage';
import UserLayout from './components/UserLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<MainPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>

        <Route path="user-menu" element={<UserLayout />}>
          <Route index element={<div></div>} />
          <Route path="schema" element={<div></div>} />
          <Route path="endpoint" element={<div></div>} />
        </Route>

        <Route path="*" element={<div>Page not found. Error 404</div>} />
      </Routes>
    </>
  );
}

export default App;
