import React, { Component } from 'react';
import fakeMoviesApi from '../fakeMoviesApi';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const state = {
  inputValue: '',
  movies: [],
}

class Home extends Component {
  constructor() {
    super()
    this.state = state
  }

  onChangeText = (inputValue) => {
    this.setState({inputValue})
  }

  onButtonPress = () => {
    this.searchMovies(this.state.inputValue)
  }

  searchMovies = (keyword) => {
    let movies = fakeMoviesApi(keyword)
    this.setState({movies});
  }

  renderSearchWord = () => {
    if (this.state.inputValue !== '') {
      return (
        <Text style={styles.currentSearch}>
          {`Searches for '${this.state.inputValue}'`}
        </Text>
    )}
  }

  renderList = () => {
    if (this.state.movies && this.state.movies.length > 0) {
      return this.state.movies.map(movie =>
        <Text key={movie.id}>{movie.title}</Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.homeContent}>
        <Text>
          What movie should we watch tonight?
        </Text>
        <Image
          style={styles.image}
          source={require('../resources/movieBoardImg.jpg')}
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
        {this.renderSearchWord()}
        <ScrollView style={styles.searchResults}>
          {this.renderList()}
        </ScrollView>
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
  searchBar: {
    height: 40,
    width: '70%',
    padding: 10,
    borderRadius: 2,
    borderColor: 'gray',
    borderWidth: 1
  },
  searchResults:{
    width:'100%',
    paddingLeft:'15%',
    paddingRight:'15%',
  },
  currentSearch: {
    paddingTop: 16,
    fontWeight: 'bold',
  }
}

export default Home;
