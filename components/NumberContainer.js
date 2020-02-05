import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors'

class NumberContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NumberContainer: ''
        }
    }


    componentDidMount() {
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.number}>{this.props.children}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 22
    }
});

export default NumberContainer;