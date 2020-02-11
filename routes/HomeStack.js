import React from 'react';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { View } from 'react-native'
import MasterNumberGame from '../screens/numberGame/MasterNumberGame';
import Home from '../screens/layout/Home.js';
import Header from '../components/Header';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => <Header />
        }
    },
    NumberGame: {
        screen: MasterNumberGame
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'black', height: 100 },
        headerTintColor: 'white',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
            alignSelf: 'center',
        },
        ...TransitionPresets.SlideFromRightIOS
    }
});

export default HomeStack;