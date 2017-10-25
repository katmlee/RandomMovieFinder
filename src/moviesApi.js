import axios from 'axios';
import config from '../config/config.json';

export const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';

const params = keyword => ({
  params: {
    api_key: config.API_KEY,
    language: 'en-US',
    page: '1',
    include_adult: 'false',
    query: keyword,
  },
});

export const search = keyword =>
  axios.get('https://api.themoviedb.org/3/search/movie', params(keyword))
    .then(response => response.data.results);

