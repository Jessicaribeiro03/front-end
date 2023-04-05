import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import HomeController from './home/controller/home-controler';
import LoginController from './login/views/controller/login-controller';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ProfileController from './profile/controler/profile-controler';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="219151492524-r2n498cni54iftel4t27kgcu6p801nd6.apps.googleusercontent.com">
    <HashRouter>
      <Routes>

        <Route path="/" element={<HomeController />} />
        <Route path="/login" element={<LoginController />} />
        <Route path="/profile" element={<ProfileController />} />
        <Route path="/home" element={<HomeController />} />


      </Routes>
    </HashRouter>
  </GoogleOAuthProvider>




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
