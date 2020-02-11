import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from '../routes/HomeStack'
import TestStack from '../routes/TestStack'

const RootDrawerNavigator = createDrawerNavigator({
    HomeStack: {
        screen: HomeStack
    },
    TestStack: {
        screen: TestStack
    },

})

export default createAppContainer(RootDrawerNavigator)