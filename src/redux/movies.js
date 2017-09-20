import * as moviesApi from '../moviesApi';

const CALL_MOVIE_SUCCESS = 'CALL_MOVIE_SUCCESS';
const CALL_MOVIE_FAIL = 'CALL_MOVIE_FAIL';

// ACTIONS

export const callMovieApi = keyword => dispatch =>
  moviesApi.search(keyword)
    .then(movies => dispatch({ type: CALL_MOVIE_SUCCESS, movies }))
    .catch(error => dispatch({ type: CALL_MOVIE_FAIL, error }));

// REDUCERS

const initialState = {
  movies: null,
  isLoading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CALL_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.movies,
      };
    case CALL_MOVIE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
