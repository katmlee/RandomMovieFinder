export const addFavorite = movie => ({
  type: 'ADD_FAVORITE',
  movie,
});

export const removeFavorite = movie => ({
  type: 'REMOVE_FAVORITE',
  movie,
});

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        action.movie,
      ];
    case 'REMOVE_FAVORITE':
      return [
        ...state.filter(f => f.id !== action.movie.id),
      ];
    default:
      return state;
  }
};
