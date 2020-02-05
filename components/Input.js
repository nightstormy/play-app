import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Input: ''
        }
    }


    componentDidMount() {
    }

    render() {

        return (
            <TextInput {...this.props} style={{ ...styles.input, ...this.props.style }} />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;