import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator, Text } from 'react-native';
import MovieList from '../components/MovieList';

const SearchMovieList = ({ navigation, isLoading, movies, error }) => {

  if (isLoading) {
    return <ActivityIndicator color={'red'} style={{ flex: 1 }} />;
  }

  if (error) {
    return <Text>Something went wrong</Text>;
  }

  return <MovieList movies={movies} navigation={navigation} />;
};

SearchMovieList.navigationOptions = ({ navigation }) => ({
  title: `Searches for ${navigation.state.params.keyword}`,
});

SearchMovieList.defaultProps = {
  movies: null,
  error: null,
  isLoading: false,
};

SearchMovieList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  error: PropTypes.shape({}),
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  error: state.movies.error,
  isLoading: state.movies.isLoading,
});

export default connect(mapStateToProps)(SearchMovieList);
