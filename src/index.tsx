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

        <Route path="/" element={<LoginController />} />
        <Route path="/login" element={<LoginController />} />
        <Route path="/home" element={<HomeController />} />
        <Route path="/profile" element={<ProfileController />} />
        
      </Routes>
    </HashRouter>
  </GoogleOAuthProvider>

);

reportWebVitals();
