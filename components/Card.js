import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Card: ''
        }
    }


    componentDidMount() {
    }

    render() {

        return (
            <View style={{...styles.card, ...this.props.style}}>{this.props.children}</View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 10
    },
});

export default Card;