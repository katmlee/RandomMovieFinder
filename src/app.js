import {
  StackNavigator,
} from 'react-navigation';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = StackNavigator({
  Home: { screen: Home },
  MovieList: { screen: MovieList },
  MovieDetail: { screen: MovieDetail },
});

export default App;
