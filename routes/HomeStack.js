import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartGameScreen from '../screens/numberGame/StartGameScreen';
import GameScreen from '../screens/numberGame/GameScreen';
import GameOverScreen from '../screens/numberGame/GameOverScreen';

const screens = {
    StartGameScreen: {
        screen: StartGameScreen
    },
    GameScreen: {
        screen: GameScreen
    },
    GameOverScreen: {
        screen: GameOverScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)