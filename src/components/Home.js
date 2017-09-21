import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { callMovieApi } from '../redux/movies';
import imageSource from '../resources/movieBoardImg.png';

const styles = {
  button: {
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    margin: 5,
  },
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
  },
  homeContent: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center',
  },
  searchBar: {
    height: 40,
    width: '70%',
    padding: 10,
    borderRadius: 2,
    borderColor: 'gray',
    borderWidth: 1,
  },
};

class Home extends Component {
  static navigationOptions = {
    title: 'Random Movie Finder',
  };

  constructor() {
    super();

    this.state = {
      inputValue: '',
      movies: [],
    };
  }

  onChangeText = (inputValue) => {
    this.setState({ inputValue });
  }

  onButtonPress = () => {
    this.props.dispatchCallMovieApi(this.state.inputValue);
    this.props.navigation.navigate('SearchMovieList', {
      keyword: this.state.inputValue,
    });
  }

  seeMyFavorites = () => {
    this.props.navigation.navigate('FavoriteMovieList');
  }

  render() {
    return (
      <View style={styles.homeContent}>
        <Text>
          What movie should we watch tonight?
        </Text>
        <Image
          style={styles.image}
          source={imageSource}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search anything..."
          onChangeText={this.onChangeText}
        />
        <TouchableOpacity onPress={this.onButtonPress}>
          <View style={styles.button}>
            <Text> Search </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.seeMyFavorites}>
          <View style={styles.button}>
            <Text> See my favorites </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  dispatchCallMovieApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatchCallMovieApi: keyword => dispatch(callMovieApi(keyword)),
});

export default connect(null, mapDispatchToProps)(Home);
