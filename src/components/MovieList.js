import React, { Component } from 'react';
import {
  FlatList,
 } from 'react-native';
 import MovieCell from './MovieCell';

const renderSearchWord = (searchKeyword) => {
  if (searchKeyword !== '') {
    return `Searches for '${searchKeyword}'`;
  }
};

class MovieList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: renderSearchWord(navigation.state.params.searchKeyword),
  });

  movieSelected = (movie) => {
    this.props.navigation.navigate('MovieDetail', { movie });
  }

  render() {
    return (
      <FlatList
          style={styles.searchResults}
          data={this.props.navigation.state.params.movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieCell movie={item} callback={this.movieSelected} />}
      />
    );
  }
}

const styles = {
  searchResults: {
    flex: 1,
    width: '100%'
  },
  currentSearch: {
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: 'bold',
    color: '#DB5461'
  }
};

export default MovieList;

