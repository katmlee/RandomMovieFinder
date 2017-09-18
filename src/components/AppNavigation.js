import {
  StackNavigator,
} from 'react-navigation';
import Home from './Home';
import FavoriteMovieList from '../containers/FavoriteMovieList';
import SearchMovieList from './SearchMovieList';
import MovieDetail from './MovieDetail';

const AppNavigation = StackNavigator({
  Home: { screen: Home },
  FavoriteMovieList: { screen: FavoriteMovieList },
  SearchMovieList: { screen: SearchMovieList },
  MovieDetail: { screen: MovieDetail },
});

export default AppNavigation;
