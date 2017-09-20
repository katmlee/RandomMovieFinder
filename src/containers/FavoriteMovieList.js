import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/MovieList';

const FavoriteMovieList = ({ favorites, navigation }) => (
  <MovieList movies={favorites} navigation={navigation} />
);

FavoriteMovieList.navigationOptions = () => ({
  title: 'My Favorites',
});

FavoriteMovieList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(FavoriteMovieList);
