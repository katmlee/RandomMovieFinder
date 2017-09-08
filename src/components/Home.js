import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as fakeMoviesApi from '../fakeMoviesApi';
import _ from 'lodash';

const imageSource = require('../resources/movieBoardImg.png');

const state = {
  inputValue: '',
  movies: [],
  favorites: [],
};

class Home extends Component {
  static navigationOptions = {
    title: 'Random Movie Finder',
  };

  constructor() {
    super();
    this.state = state;
  }

  onChangeText = (inputValue) => {
    this.setState({ inputValue });
  }

  onButtonPress = () => {
    this.searchMovies(this.state.inputValue);
  }

  seeMyFavorites = () => {
    this.props.navigation.navigate('MovieList', {
      listingTitle: 'My Favorites',
      movies: this.state.favorites,
      favorites: this.state.favorites,
      removeFromFavorite: this.removeFromFavorite, 
      addToFavorite: this.addToFavorite
    });
  }

  removeFromFavorite = (movie) => {
    this.setState({
      favorites: _.filter(this.state.favorites, f => f.id !== movie.id)
    });
  }

  addToFavorite = (movie) => {
    this.setState({
      favorites: [...this.state.favorites, movie],
    });
  }

  searchMovies = (keyword) => {
    const movies = fakeMoviesApi.search(keyword);
    this.props.navigation.navigate('MovieList', {
      listingTitle: `Searches for '${keyword}'`,
      movies,
      favorites: this.state.favorites,
      removeFromFavorite: this.removeFromFavorite, 
      addToFavorite: this.addToFavorite
    });
  }

  render() {
    return (
      <View style={styles.homeContent}>
        <Text>
          What movie should we watch tonight?
        </Text>
        <Image
          style={styles.image}
          source={imageSource}
        />
        <TextInput
          style={styles.searchBar}
          placeholder='Search anything...'
          onChangeText={this.onChangeText}
        />
        <TouchableOpacity onPress={this.onButtonPress}>
          <View style={styles.button}>
            <Text> Search </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.seeMyFavorites}>
          <View style={styles.button}>
            <Text> See my favorites </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
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
  searchBar: {
    height: 40,
    width: '70%',
    padding: 10,
    borderRadius: 2,
    borderColor: 'gray',
    borderWidth: 1,
  }
};

export default Home;
