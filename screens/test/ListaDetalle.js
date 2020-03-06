import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from '../../components/Card'
import { Images } from '../../global/global'

const ListaDetalle = props => {

    const { navigation } = props

    const rating = navigation.getParam('rating');

    return (

        <View style={styles.screen}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
                <View style={styles.rating}>
                    <Text>Rating: </Text>
                    <Image source={Images.rating[rating]}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})

export default ListaDetalle