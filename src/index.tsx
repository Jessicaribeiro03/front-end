import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import LoginView from './login/views/view/login-view';
import UserView from './profile/view/user-view';
import { HomeUserView } from './home/view/home-user-view';
import HomeController from './home/controller/home-controler';
import LoginControler from './login/views/controller/login-controller';
import UserController from './profile/controlller/profile-controller';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="219151492524-r2n498cni54iftel4t27kgcu6p801nd6.apps.googleusercontent.com">
  <HashRouter>
    <Routes>
      <Route path="/" element={<LoginControler />} />
      <Route path="/login" element={<LoginControler />} />
      <Route path="/user" element={<UserController />} />
      <Route path="/home" element={<HomeController/>} />
      
      
    </Routes>
  </HashRouter>
  </GoogleOAuthProvider>
  



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
