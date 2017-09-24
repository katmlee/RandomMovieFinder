import React from 'react';
import { Text, FlatList, View } from 'react-native';
import MovieListItem from './MovieListItem';
import moviesData from '../resources/movies.json';

const renderSearchWord = (searchKeyword) => {
  if (searchKeyword !== '') {
    return (
      <Text style={styles.currentSearch}>
        {`Searches for '${searchKeyword}'`}
      </Text>
  )}
}

class MovieList extends React.Component {
  state = {
    moviesToDisplay: moviesData.results,
  }

  itemContainsKeyword(item, searchKeyword) {
    const itemTitle = item.title.toLowerCase();
    const keyword = searchKeyword.toLowerCase();
    return itemTitle.indexOf(keyword) >= 0;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.searchKeyword !== '') {
      const newMoviesToDisplay = moviesData.results.filter((item) => 
        this.itemContainsKeyword(item, nextProps.searchKeyword)
      );
      this.setState({moviesToDisplay: newMoviesToDisplay})
    } else {
      this.setState({moviesToDisplay: moviesData.results})
    }
  }

  render () {
    const {searchKeyword, movies} = this.props;
    return (
      <View style={styles.searchResults}>
        <Text style={styles.currentSearch}>
            {renderSearchWord(searchKeyword)}
        </Text>
        <FlatList
          style={{flex:1}}
          data={this.state.moviesToDisplay}
          keyExtractor={(item, index) => item.id }
          renderItem={({item}) => <MovieListItem
            title={item.title}
            posterPath={item.poster_path}
            voteAverage={item.vote_average}
          />}
        />
      </View>
    );
  }
}

const styles = {
  searchResults:{
    flex:1,
  },
  currentSearch: {
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    fontWeight: 'bold',
  }
}

export default MovieList;


