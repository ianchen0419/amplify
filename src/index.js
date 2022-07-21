import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

//Auth0 
import { Auth0Provider } from '@auth0/auth0-react'
import { getConfig } from './config';

import "@aws-amplify/ui-react/styles.css";

import { BrowserRouter } from 'react-router-dom'

Amplify.configure(awsExports);

const config = getConfig()
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  redirectUri: window.location.origin,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider {...providerConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
