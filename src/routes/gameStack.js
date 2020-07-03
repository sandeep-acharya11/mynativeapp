import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
import TicTac from '../components/TicTac'
import Header from '../shared/header'


const screens = {

    About: {
        screen: TicTac,
        navigationOptions: ({ navigation }) => {
            // title: "Home"
            return {
                headerTitle: () => <Header title='Games' navigation={navigation}></Header>
            }
        }
    }
}

const GamesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#90636b',
        headerStyle: { backgroundColor: 'pink' }
    }
})

export default GamesStack