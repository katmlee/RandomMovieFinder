import movies from './resources/movies.json';

export const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';

export const search = (keyword) => {
  if (keyword === 'Fight') {
    return movies.results;
  }
  return [];
};
