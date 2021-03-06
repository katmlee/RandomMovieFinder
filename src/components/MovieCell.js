import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { IMAGE_PREFIX } from '../moviesApi';


const styles = {
  cell: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingText: {
    fontSize: 16,
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
};

const MovieCell = ({ movie, callback }) => (
  <TouchableHighlight onPress={() => { callback(movie); }}>
    <View style={styles.cell}>
      <Image style={styles.image} source={{ uri: `${IMAGE_PREFIX}${movie.poster_path}` }} />
      <View style={styles.description}>
        <Text id="movieTitle" style={styles.titleText} key={movie.id}>{movie.title}</Text>
        <Text id="movieVoteAverage" style={styles.ratingText}>{`${movie.vote_average}/10`}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

MovieCell.defaultProps = {
  callback: () => {},
};

MovieCell.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
  callback: PropTypes.func,
};

export default MovieCell;
