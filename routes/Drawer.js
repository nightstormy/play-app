import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from '../routes/HomeStack'
import ListaStack from '../routes/ListaStack'

const RootDrawerNavigator = createDrawerNavigator({
    'Inicio': {
        screen: HomeStack
    },
    'Lista de prueba': {
        screen: ListaStack
    },

})

export default createAppContainer(RootDrawerNavigator)