
import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { StyleSheet, View } from 'react-native';
import HousesLists from './sections/houses/HousesLists'

import * as webservices from 'prueba/src/webservices/webservices'

export default class App extends Component {

  componentWillMount(){
    webservices.configureAxios()
  }

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
