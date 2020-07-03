import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'
import CustomDrawer from '../components/CustomDrawer'
import GameStack from './gameStack'

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    },    
    Games: {
        screen: GameStack,
    }
}, {
    // initialRouteName: 'Menu',
    contentComponent: CustomDrawer,
    contentOptions: {
        activeTintColor: '#000000',
        activeBackgroundColor: '#e6e6e6',
    }
})

export default createAppContainer(RootDrawerNavigator)