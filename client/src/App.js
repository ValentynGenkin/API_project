import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginForm />} />
          <Route path="*" element={<div>Page not found. Error 404</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
