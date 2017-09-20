import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import {
  Image,
  TouchableHighlight,
} from 'react-native';
import { addFavorite, removeFavorite } from '../redux/favorites';
import favoritesIcon from '../resources/favorites.png';
import favoritesSelectedIcon from '../resources/favorites_selected.png';

const isFavorite = (favorites, movie) =>
  favorites.includes(movie);

const HeartButton = ({ movie, favorites, dispatchAddFavorite, dispatchRemoveFavorite }) => (
  <TouchableHighlight
    style={{ marginRight: 10 }}
    onPress={() => {
      if (isFavorite(favorites, movie)) {
        dispatchRemoveFavorite(movie);
      } else {
        dispatchAddFavorite(movie);
      }
    }}
  >
    <Image source={isFavorite(favorites, movie) ? favoritesSelectedIcon : favoritesIcon} />
  </TouchableHighlight>
);

HeartButton.propTypes = {
  movie: PropTypes.shape({}).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatchAddFavorite: PropTypes.func.isRequired,
  dispatchRemoveFavorite: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    favorites: state.favorites,
  }),
  dispatch => ({
    dispatchAddFavorite: movie => dispatch(addFavorite(movie)),
    dispatchRemoveFavorite: movie => dispatch(removeFavorite(movie)),
  }),
)(HeartButton);
