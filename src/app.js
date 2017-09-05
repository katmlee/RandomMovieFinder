import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

const App = () => (
  <View style={styles.app}>
      <Image source={require('./resources/movieBoardImg.jpg')} />
      <Text>What movie should we watch tonight?</Text>
  </View>
)

const styles = {
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
