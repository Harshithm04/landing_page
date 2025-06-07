import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { OnboardingProvider } from './context/OnboardingContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <OnboardingProvider>
          <App />
        </OnboardingProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
