import React from 'react';
import { View, Text } from 'react-native';

export default Header = (props) =>
  <View style={styles.header}>
    <Text style={styles.headerText}>
      {props.children}
    </Text>
  </View>;

const styles = {
  headerText: {
    textAlign: 'center',
    fontSize: 16
  },
  header: {
    backgroundColor: '#F8F8F8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
};
