import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator, Text } from 'react-native';
import MovieCell from './MovieCell';

const styles = {
  searchResults: {
    flex: 1,
    width: '100%',
  },
  currentSearch: {
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: 'bold',
    color: '#DB5461',
  },
};

class MovieList extends Component {
  movieSelected = (movie) => {
    this.props.navigation.navigate('MovieDetail', { movie });
  }

  render() {
    const { isLoading, movies, error } = this.props;

    if (isLoading) {
      return <ActivityIndicator color={'red'} style={{ flex: 1 }} />;
    }

    if (error) {
      return <Text>Something went wrong</Text>;
    }

    return (
      <FlatList
        style={styles.searchResults}
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MovieCell movie={item} callback={this.movieSelected} />}
      />
    );
  }
}

MovieList.defaultProps = {
  movies: null,
  error: null,
  isLoading: true,
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  error: PropTypes.shape({}),
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  error: state.movies.error,
  isLoading: state.movies.isLoading,
});

export default connect(mapStateToProps)(MovieList);

