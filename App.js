import React from 'react';

import {Provider} from 'react-redux';
import configStore from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/Main';
import {LogBox} from 'react-native';
export default function App() {
  LogBox.ignoreLogs(['Reanimated 2']);
  const {store, persistor} = configStore();
  // const theme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //   },
  // };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
