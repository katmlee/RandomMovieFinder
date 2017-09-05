import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

const App = () => (
  <View style={styles.home}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Random Movie Finder
        </Text>
      </View>
      <View style={styles.homeContent}>
        <Text>
          What movie should we watch tonight?
        </Text>
        <Image style={styles.image} source={require('./resources/movieBoardImg.jpg')} />
      </View>
  </View>
)

const styles = {
  home: {
    flex:1
  },
  headerText: {
    textAlign:'center',
    fontSize: 16
  },
  header: {
    backgroundColor: '#F8F8F8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
  homeContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
