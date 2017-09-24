import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MovieList from './MovieList';
import SearchBox from './SearchBox';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.onSearchPressed = this.onSearchPressed.bind(this);
  }

  state = {
    searchKeyword: '',
  }

  onSearchPressed (searchKeyword) {
    this.setState({searchKeyword});
  }

  render () {
    return (
      <View style={styles.homeContent}>
        <Text>
          What movie should we watch tonight?
        </Text>
        <Image
          style={styles.image}
          source={require('../resources/movieBoardImg.jpg')}
        />
        <SearchBox onSearchPressed={this.onSearchPressed} />
        <View style={styles.movieListView}>
          <MovieList
            searchKeyword={this.state.searchKeyword}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  button: {
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    margin: 5,
  },
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
  homeContent: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center'
  },
  movieListView: {
    width: '95%',
    flex: 1
  }
}

export default Home;
