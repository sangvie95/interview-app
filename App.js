/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Routers from './Routers';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

const App: () => React$Node = () => {
  return (
    <>
      <Routers />
    </>
  );
};

export default App;
