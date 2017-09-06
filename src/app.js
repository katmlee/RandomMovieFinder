import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './components/Home';
import Header from './components/Header';
import MovieList from './components/MovieList';
import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: Home },
  MovieList: { screen: MovieList },
});

const styles = {
  app: {
    flex:1
  }
}

export default App;
