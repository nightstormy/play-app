
import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Card from '../../components/Card'

const ListaDetalle = props => {

    const { navigation } = props

    return (

        <View style={styles.screen}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30
    }
})

export default ListaDetalle