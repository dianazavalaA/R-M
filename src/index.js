import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InformationC from './pages/InformationC';
import NotFoundPage from './pages/NotFoundPage';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/ >
      <Route path="Information/:id" element={<InformationC />}/ >
      <Route path="*" element={<NotFoundPage />}/ >
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);