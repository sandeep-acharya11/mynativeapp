/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import STORE from './src/store';

const RNRedux = () => {
    return (
        <Provider store={STORE}>
            <App></App>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => RNRedux);
