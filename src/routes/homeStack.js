import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
// import TicTac from '../components/TicTac'
import Products from '../components/Products'
import Home from '../components/Home'

import Header from '../shared/header'
import React from 'react'

const screens = {

    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            // title: "Home"
            return {
                headerTitle: () => <Header navigation={navigation}></Header>
            }
        }
    }, Products: {
        screen: Products,
        navigationOptions: ({ navigation }) => {
            // title: "Home"
            return {
                headerTitle: () => <Header navigation={navigation}></Header>
            }
        }
    },

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#90636b',
        headerStyle: { backgroundColor: 'pink' }
    }
})

export default HomeStack