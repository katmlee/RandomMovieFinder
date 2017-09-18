import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { IMAGE_PREFIX } from '../fakeMoviesApi';
import HeartButton from '../containers/HeartButton';

class MovieDetail extends Component {
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

MovieDetail.navigationOptions = ({ navigation }) => ({
    title: 'Movie',
    headerRight:
        <HeartButton
            movie={navigation.state.params.movie}
            dispatch={navigation.dispatch}
        />
});

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
