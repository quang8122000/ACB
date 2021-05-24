/**
 * @format
 */
import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const app = () => {
  return (
    <Provider store={store} persistor>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => app);
console.disableYellowBox = true;
