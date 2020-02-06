import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import TouchButton from '../../components/TouchButton'
import { FlatList } from 'react-native-gesture-handler';

const Test2 = props => {

    const { navigation } = props

    return (
        <View style={styles.screen}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30
    }
})

export default Test2