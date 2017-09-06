import React, { Component } from 'react';
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

class MovieList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: renderSearchWord(navigation.state.params.searchKeyword),
  });

  render() {
    return (
      <View style={styles.searchResults}>
        <ScrollView>
            {renderList(this.props.navigation.state.params.movies)}
        </ScrollView>
      </View>
    )
  }
};

const styles = {
  searchResults:{
    flex:1,
    width:'100%',
    padding:10
  },
  currentSearch: {
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: 'bold',
    color: '#DB5461'
  }
}

export default MovieList;


