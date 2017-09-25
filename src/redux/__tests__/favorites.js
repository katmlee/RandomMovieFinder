import reducer, { addFavorite, removeFavorite, ADD_FAVORITE, REMOVE_FAVORITE } from '../favorites';

describe('favorites', () => {
  it('should addFavorite', () => {
    const movie = {};
    expect(addFavorite(movie)).toEqual({
      type: ADD_FAVORITE,
      movie,
    });
  });

  it('should removeFavorite', () => {
    const movie = {};
    expect(removeFavorite(movie)).toEqual({
      type: REMOVE_FAVORITE,
      movie,
    });
  });

  it('should append movie', () => {
    const movie = {};
    const action = {
      type: ADD_FAVORITE,
      movie,
    };
    expect(reducer([], action)).toEqual([movie]);
  });

  it('should remove movie', () => {
    const movie = {};
    const action = {
      type: REMOVE_FAVORITE,
      movie,
    };
    expect(reducer([movie], action)).toEqual([]);
  });
});
