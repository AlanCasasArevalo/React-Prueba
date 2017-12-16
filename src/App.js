
import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { StyleSheet, View, StatusBar } from 'react-native';
import HousesLists from './sections/houses/HousesLists'
import CharactersList from './sections/characters/CharactersList'
import { Colors } from 'prueba/src/commons' 

import * as webservices from 'prueba/src/webservices/webservices'

import {createStore, combineReducers} from 'redux'
import { Provider,  connect } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './redux/reducers'
import { applyMiddleware } from 'redux';

const reducer = combineReducers(reducers)
const store = createStore(
  reducer, applyMiddleware(thunk)
)

export default class App extends Component {

  componentWillMount(){
    webservices.configureAxios()
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
    
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key={'housesList'}
              component={HousesLists}
              hideNavBar
              >                
            </Scene>
            <Scene key={'CharactersList'}
              component={CharactersList}
              navigationBarStyle={styles.navBar}
              >                
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navBar:{
    backgroundColor: Colors.navBarColor
  }
});









