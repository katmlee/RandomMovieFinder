import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MovieCell from '../../src/components/MovieCell';

it('renders correctly', () => {
  const movie = {};
  const tree = renderer.create(
    <MovieCell poster_path="" movie={movie} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
