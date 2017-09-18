import React from 'react';
import MovieList from './MovieList';

const SearchMovieList = ({ navigation }) => (
  <MovieList movies={navigation.state.params.movies} navigation={navigation} />
);

SearchMovieList.navigationOptions = ({ navigation }) => ({
    title: `Searches for ${navigation.state.params.keyword}`,
  });

export default SearchMovieList;
