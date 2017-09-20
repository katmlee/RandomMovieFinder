import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import * as fakeMoviesApi from '../moviesApi';
import imageSource from '../resources/movieBoardImg.png';

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
    alignItems: 'center',
  },
  searchBar: {
    height: 40,
    width: '70%',
    padding: 10,
    borderRadius: 2,
    borderColor: 'gray',
    borderWidth: 1,
  },
};

class Home extends Component {
  static navigationOptions = {
    title: 'Random Movie Finder',
  };

  constructor() {
    super();

    this.state = {
      inputValue: '',
      movies: [],
    };
  }

  onChangeText = (inputValue) => {
    this.setState({ inputValue });
  }

  onButtonPress = () => {
    this.searchMovies(this.state.inputValue);
  }

  seeMyFavorites = () => {
    this.props.navigation.navigate('FavoriteMovieList');
  }

  searchMovies = (keyword) => {
    fakeMoviesApi.search(keyword)
      .then((movies) => {
        console.log('movies', movies);
        this.props.navigation.navigate('SearchMovieList', {
          keyword,
          movies,
        });
      })
      .catch(() => console.log('faillleeedddd'));
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
          placeholder="Search anything..."
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

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
