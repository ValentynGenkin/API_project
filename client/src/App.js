import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import RegistrationInput from './components/RegistrationInput';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="registration" element={<RegistrationInput />} />
          <Route path="*" element={<div>Page not found. Error 404</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
