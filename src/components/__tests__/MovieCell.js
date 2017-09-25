import React from 'react';
import { shallow } from 'enzyme';
import { Text, Image } from 'react-native';
import MovieCell from '../MovieCell';
import { IMAGE_PREFIX } from '../../moviesApi';

describe('MovieCell', () => {
  const callback = jest.fn();
  const movie = { title: 'myMovieTitle', vote_average: 6, poster_path: 'poster_path' };
  const wrapper = shallow(<MovieCell movie={movie} callback={callback} />);

  it('renders movie title', () => {
    const movieTitleNodeWrapper = wrapper.find('#movieTitle');
    expect(movieTitleNodeWrapper.type()).toEqual(Text);
    expect(movieTitleNodeWrapper.childAt(0).text()).toEqual('myMovieTitle');
  });

  it('renders movie vote average', () => {
    const movieVoteAverageNodeWrapper = wrapper.find('#movieVoteAverage');
    expect(movieVoteAverageNodeWrapper.type()).toEqual(Text);
    expect(movieVoteAverageNodeWrapper.childAt(0).text()).toEqual('6/10');
  });

  it('renders poster image', () => {
    const moviePosterImageNodeWrapper = wrapper.find(Image);
    expect(moviePosterImageNodeWrapper.props().source).toEqual({ uri: `${IMAGE_PREFIX}poster_path` });
  });

  it('fires callback onPress', () => {
    wrapper.simulate('press');
    expect(callback).toHaveBeenCalledWith(movie);
  });
});

