import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as movies from '../movies';
import * as MoviesApiMock from '../../__mocks__/moviesApi';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../moviesApi');

describe('movies', () => {
  it('should return movies', async () => {
    const expectedActions = [
      { type: movies.CALL_MOVIE_IN_PROGRESS },
      { type: movies.CALL_MOVIE_SUCCESS,
        movies: MoviesApiMock.resultMovies,
      },
    ];

    const store = mockStore({});

    await store.dispatch(movies.callMovieApi('hello'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should return error', async () => {
    const store = mockStore({});

    await store.dispatch(movies.callMovieApi(MoviesApiMock.errorKeyword));
    expect(store.getActions()[0].type).toEqual(movies.CALL_MOVIE_IN_PROGRESS);
    expect(store.getActions()[1].type).toEqual(movies.CALL_MOVIE_FAIL);
  });

  it('should be loading if CALL_MOVIE_IN_PROGRESS', () => {
    const newState = movies.reducer(undefined, { type: movies.CALL_MOVIE_IN_PROGRESS });
    expect(newState).toEqual({ isLoading: true, movies: null, error: null });
  });

  it('should be loading if CALL_MOVIE_SUCCESS', () => {
    const resultMovies = [];
    const newState = movies.reducer(undefined, {
      type: movies.CALL_MOVIE_SUCCESS, movies: resultMovies,
    });
    expect(newState).toEqual({ isLoading: false, movies: resultMovies, error: null });
  });

  it('should be loading if CALL_MOVIE_FAIL', () => {
    const error = new Error();
    const newState = movies.reducer(undefined, {
      type: movies.CALL_MOVIE_FAIL, error,
    });
    expect(newState).toEqual({ isLoading: false, error, movies: null });
  });
});





