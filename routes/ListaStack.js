import React from 'react'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
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
                headerTitle: navigation.getParam('title')
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

export default ListaStack;