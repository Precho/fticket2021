import {GlobalStoreProvider} from './src/mobx/context/globalContext';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const Netguru = () => (
  <GlobalStoreProvider>
    <App />
  </GlobalStoreProvider>
);
AppRegistry.registerComponent(appName, () => Netguru);
