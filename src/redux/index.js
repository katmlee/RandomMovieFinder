// src/redux/index.js
import { combineReducers } from 'redux';
import favoritesReducer from './favorites';
import moviesReducer from './movies';

export default combineReducers({
  favorites: favoritesReducer,
  movies: moviesReducer,
});

