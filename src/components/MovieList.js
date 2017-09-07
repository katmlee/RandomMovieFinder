import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
 } from 'react-native';
 import MovieCell from './MovieCell';

const renderList = (movies) => {
  if (movies && movies.length > 0) {
    return movies.map(movie =>
      <Text key={movie.id}>{movie.title}</Text>
    );
  }
}

const renderSearchWord = (searchKeyword) => {
  if (searchKeyword !== '') {
    return `Searches for '${searchKeyword}'`
  }
}

class MovieList extends Component {
  constructor(props) {
    super(props);

    const movies = props.navigation.state.params.movies || [];

    const ds = new ListView.DataSource({rowHasChanged: (movie1, movie2) => movie1.id !== movie2.id});
    this.state = {
      dataSource: ds.cloneWithRows(movies),
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: renderSearchWord(navigation.state.params.searchKeyword),
  });

  movieSelected = (movie) => {
    this.props.navigation.navigate('MovieDetail', {movie})
  }

  render() {
    return (
      <ListView
        style={styles.searchResults}
          dataSource= {this.state.dataSource}
          renderRow={(movie) => <MovieCell movie={movie} callback={this.movieSelected} />}
        />
    )
  }
};

const styles = {
  searchResults:{
    flex:1,
    width:'100%'
  },
  currentSearch: {
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: 'bold',
    color: '#DB5461'
  }
}

export default MovieList;


