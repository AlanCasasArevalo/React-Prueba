/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { StyleSheet, View } from 'react-native';
import HousesLists from './sections/houses/HousesLists'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key={'housesList'}
            component={HousesLists}>
              
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({

});
