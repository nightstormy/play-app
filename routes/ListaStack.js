import React from 'react'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { StyleSheet, Image } from 'react-native'
import Lista from '../screens/test/Lista.js';
import ListaDetalle from '../screens/test/ListaDetalle.js';
import Header from '../components/Header';

const screens = {
    Lista: {
        screen: Lista,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header title="Prueba" navigation={navigation} />
            }
        }
    },
    ListaDetalle: {
        screen: ListaDetalle,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: navigation.getParam('title'),
                headerBackground: () => <Image style={styles.header} source={require('../assets/dark_bg.png')} />
            }
        }
    }
}

const ListaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'black', height: 100 },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
        ...TransitionPresets.SlideFromRightIOS
    }
});

const styles = StyleSheet.create({
    header: {
        paddingTop: 25,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
})

export default ListaStack;