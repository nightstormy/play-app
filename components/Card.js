import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card({ style, children }){
    return (
        <View style={{...styles.card, ...style}}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 8,
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 10
    },
});