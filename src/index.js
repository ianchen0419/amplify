import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { HeroLayout1 } from './ui-components';

import { Flex, View } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroLayout1 />

    <Flex direction={{ base: 'column', large: 'row' }}>
      <View width="100%" backgroundColor={{ base: 'orange', large: 'yellow' }}>
        See!!
      </View>
      <View width="100%" backgroundColor={['orange', 'orange', 'orange', 'yellow']}>
        there!
      </View>
    </Flex>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
