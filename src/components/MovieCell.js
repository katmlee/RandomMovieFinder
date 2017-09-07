import React from 'react';
import {Text, Image, View, TouchableHighlight} from 'react-native';
// https://image.tmdb.org/t/p/w500/movie/q0R4crx2SehcEEQEkYObktdeFy.jpg

// https://image.tmdb.org/t/p/w500/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg
const MovieCell = ({movie, callback}) => (
  <TouchableHighlight onPress={() => {callback(movie)}}>
    <View style={styles.cell}>
      <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} />
      <View style={styles.description}>
        <Text style={styles.titleText} key={movie.id}>{movie.title}</Text>
        <Text style={styles.ratingText}>{movie.vote_average}/10</Text>
      </View>
    </View>
  </TouchableHighlight>
);

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
    resizeMode: 'contain'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  ratingText: {
    fontSize: 16,
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}

export default MovieCell;
