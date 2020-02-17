import React from 'react';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { View, Image, StyleSheet } from 'react-native'
import MasterNumberGame from '../screens/numberGame/MasterNumberGame';
import Home from '../screens/layout/Home.js';
import Header from '../components/Header';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header title="m2-project" navigation={navigation} />
            }
        }
    },
    NumberGame: {
        screen: MasterNumberGame,
        navigationOptions: {
            title: "Adivina el Numero!",
            headerBackground: () => <Image style={styles.header} source={require('../assets/dark_bg.png')} />
        }
    }
}

const HomeStack = createStackNavigator(screens, {
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

export default HomeStack;