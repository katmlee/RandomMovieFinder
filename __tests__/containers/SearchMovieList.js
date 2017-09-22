import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import SearchMovieList from '../../src/containers/SearchMovieList';

const mockStore = configureStore();
let store;
const navigation = {
  navigate: jest.fn(),
};

describe('SearchMovieList', () => {
  it('should show movieList', () => {
    const movies = {
      movies: [],
    };
    store = mockStore({ movies });
    const tree = renderer.create(
      <SearchMovieList store={store} navigation={navigation} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show activity indicator if loading', () => {
    const movies = {
      movies: [],
      isLoading: true,
    };
    store = mockStore({ movies });
    const tree = renderer.create(
      <SearchMovieList store={store} navigation={navigation} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show error if there is error', () => {
    const movies = {
      movies: [],
      error: {},
    };
    store = mockStore({ movies });
    const tree = renderer.create(
      <SearchMovieList store={store} navigation={navigation} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
