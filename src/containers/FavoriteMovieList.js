import React from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';

const FavoriteMovieList = ({ favorites, navigation }) => (
  <MovieList movies={favorites} navigation={navigation} />
);

FavoriteMovieList.navigationOptions = () => ({
  title: 'My Favorites',
});

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(FavoriteMovieList);
