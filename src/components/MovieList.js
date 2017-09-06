import React from 'react';
import { Text, ScrollView, View } from 'react-native';

const renderList = (movies) => {
  if (movies && movies.length > 0) {
    return movies.map(movie =>
      <Text key={movie.id}>{movie.title}</Text>
    );
  }
}

const renderSearchWord = (searchKeyword) => {
  if (searchKeyword !== '') {
    return (
      <Text style={styles.currentSearch}>
        {`Searches for '${searchKeyword}'`}
      </Text>
  )}
}

const MovieList = ({searchKeyword, movies}) => (
  <View style={styles.searchResults}>
    <Text style={styles.currentSearch}>
        {renderSearchWord(searchKeyword)}
    </Text>
    <ScrollView>
        {renderList(movies)}
    </ScrollView>
  </View>
);

const styles = {
  searchResults:{
    flex:1,
    width:'100%',
    paddingLeft:'15%',
    paddingRight:'15%',
  },
  currentSearch: {
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: 'bold',
  }
}

export default MovieList;


