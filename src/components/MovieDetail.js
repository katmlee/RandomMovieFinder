import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TouchableHighlight } from 'react-native';
import { IMAGE_PREFIX } from '../fakeMoviesApi';
import favoritesIcon from '../resources/favorites.png';

const HeartButton = ({movie}) => (
    <TouchableHighlight 
        style={{ marginRight: 10 }}
        onPress={() => { console.log(movie); }} 
    >
        <Image source={favoritesIcon} />
    </TouchableHighlight>
);

class MovieDetail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Movie',
        headerRight: <HeartButton movie={navigation.state.params.movie} />
    });

    render() {
        const { navigation } = this.props;
        const { movie } = navigation.state.params;
        return (
            <ScrollView>
                <View>
                    <Image 
                    style={styles.image} 
                    source={{ uri: `${IMAGE_PREFIX}${movie.backdrop_path}` }} 
                    />
                    <View style={styles.content}>
                        <Text style={[styles.content_font, styles.title]}>{movie.title}</Text>
                        <View style={styles.first_row}>
                            <Text style={styles.content_font}>
                                Release Date: {movie.release_date}
                            </Text>
                            <Text style={styles.content_font}>
                                Rating: {movie.vote_average}/10
                            </Text>
                        </View>
                        <Text>{movie.overview}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    image: {
        width: '100%',
        height: 200
    },
    content: {
        padding: 10
    },
    first_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    content_font: {
        fontSize: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    }
};

export default MovieDetail;
