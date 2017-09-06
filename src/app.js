import React, { Component } from 'react';
import fakeMoviesApi from './fakeMoviesApi';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const state = {
  inputValue: '',
  movies: [],
}


class App extends Component {
  constructor() {
    super()
    this.state = state
  }

  onChangeText = (inputValue) => {
    this.setState({inputValue})
    this.searchMovies(inputValue)
  }

  searchMovies = (keyword) => {
    this.setState({movies: fakeMoviesApi(keyword)});
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
    console.log(this.state.inputValue)
    return (
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
            <Image
              style={styles.image}
              source={require('./resources/movieBoardImg.jpg')}
            />
            <TextInput
              style={styles.searchBar}
              placeholder='Search anything...'
              onChangeText={this.onChangeText}
            />
            {this.renderSearchWord()}
            <ScrollView style={styles.searchResults}>
              {this.renderList()}
            </ScrollView>
          </View>
      </View>
    )
  }
}

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

export default App;
