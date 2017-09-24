import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

class SearchBox extends React.Component {
  state= {
    inputValue: '',
  };

  onChangeText = (inputValue) => {
    this.setState({inputValue})
  }

  render() {
    const { onSearchPressed } = this.props;
    return (
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchBar}
          placeholder='Search anything...'
          onChangeText={this.onChangeText}
        />
        <TouchableOpacity onPress={() => onSearchPressed(this.state.inputValue)}>
          <View style={styles.button}>
            <Text> Search </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  searchBox: {
    width: '70%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '30%',
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    margin: 5,
  },
  searchBar: {
    width: '100%',
    height: 40,
    padding: 10,
    borderRadius: 2,
    borderColor: 'gray',
    borderWidth: 1,
  },
};

export default SearchBox;
