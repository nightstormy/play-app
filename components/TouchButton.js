import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

class TouchButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TouchButton: ''
        }
    }


    componentDidMount() {
    }

    render() {

        return (
            <TouchableOpacity
                {...this.props}
                style={{ ...styles.button, ...this.props.style }}
                activeOpacity={0.6}
            >
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
    }
});

export default TouchButton;