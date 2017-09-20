import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

const SearchMovieList = ({ navigation }) => (
  <MovieList movies={navigation.state.params.movies} navigation={navigation} />
);

SearchMovieList.navigationOptions = ({ navigation }) => ({
  title: `Searches for ${navigation.state.params.keyword}`,
});

SearchMovieList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SearchMovieList;
