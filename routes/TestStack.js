import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import Test from '../screens/test/test.js';
import Test2 from '../screens/test/test2.js';

const screens = {
    Test: {
        screen: Test
    },
    Test2: {
        screen: Test2
    }
}

const TestStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'black', height: 100 },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
        ...TransitionPresets.SlideFromRightIOS
    }
});

export default TestStack;