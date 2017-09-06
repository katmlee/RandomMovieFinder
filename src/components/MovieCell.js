import React from 'react';
import {Text, Image, View} from 'react-native';
// https://image.tmdb.org/t/p/w500/movie/q0R4crx2SehcEEQEkYObktdeFy.jpg

// https://image.tmdb.org/t/p/w500/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg
const MovieCell = ({movie}) => (
  <View style={styles.cell}>
    <Image style={styles.image} source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} />
    <Text key={movie.id}>{movie.title}</Text>
  </View>
);

const styles = {
  cell: {
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
}

export default MovieCell;
