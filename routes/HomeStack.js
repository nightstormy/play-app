import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MasterNumberGame from '../screens/numberGame/MasterNumberGame';
import Home from '../screens/layout/Home.js';
import Test from '../screens/test/test.js';
import Test2 from '../screens/test/test2.js';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Inicio'
        }
    },
    Test: {
        screen: Test
    },
    Test2: {
        screen: Test2
    },
    NumberGame: {
        screen: MasterNumberGame
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'black', height: 100 },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' }
    }
});

export default createAppContainer(HomeStack)