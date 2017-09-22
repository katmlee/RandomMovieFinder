import React from 'react';
import { shallow } from 'enzyme';
import { Image } from 'react-native';
import configureStore from 'redux-mock-store';
import FavoriteButton from '../../src/containers/FavoriteButton';
import favoritesSelectedIcon from '../../src/resources/favorites_selected.png';
import * as favorites from '../../src/redux/favorites';

const mockStore = configureStore();
let store;

describe('FavoriteButton', () => {
  it('should show favoritesSelectedIcon if movie is favorite', () => {
    const movie = {};
    store = mockStore({ favorites: [movie] });
    const wrapper = shallow(<FavoriteButton store={store} movie={movie} />);

    const imageNodeWrapper = wrapper.dive().find(Image);

    // Doesn't work 'coz it's always 1
    expect(imageNodeWrapper.find(Image).props().source).toEqual(favoritesSelectedIcon);
  });

  it('should dispatch ADD_FAVORITE action if not already in favorites', () => {
    const movie = { id: 1 };
    store = mockStore({ favorites: [] });
    const wrapper = shallow(<FavoriteButton store={store} movie={movie} />);

    wrapper.dive().simulate('press');
    expect(store.getActions()[0]).toEqual({ type: favorites.ADD_FAVORITE, movie });
  });

  it('should dispatch REMOVE_FAVORITE action if already in favorites', () => {
    const movie = { id: 1 };
    store = mockStore({ favorites: [movie] });
    const wrapper = shallow(<FavoriteButton store={store} movie={movie} />);

    wrapper.dive().simulate('press');
    expect(store.getActions()[0]).toEqual({ type: favorites.REMOVE_FAVORITE, movie });
  });
});
