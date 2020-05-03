/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './src/Login' 
export default class App extends Component {
  
  render() {
    console.disableYellowBox = true;
    return (
      <Login></Login>
    );
  }
};

