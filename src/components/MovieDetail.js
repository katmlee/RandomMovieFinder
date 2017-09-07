import React, {Component} from 'react'
import {Text} from 'react-native'

class MovieDetail extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.movie.title,
    });

    render() {
        const {navigation} = this.props
        return <Text>{navigation.state.params.movie.overview}</Text>
    }
}

export default MovieDetail