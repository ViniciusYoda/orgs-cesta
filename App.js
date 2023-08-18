import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';


export default function App() {
  
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}


