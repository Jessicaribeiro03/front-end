import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import LoginView from './login/views/login-view';
import UserView from './user/user-view';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/user" element={<UserView />} />
      <Route path="/home" element={<UserView/>} />
      
    </Routes>
  </BrowserRouter>
  



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
