import movies from './resources/movies.json';
export default (keyword) => {
  if (keyword === 'Fight') {
    return movies.results;
  }
}
