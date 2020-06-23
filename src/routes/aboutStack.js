import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
// import TicTac from '../components/TicTac'
import About from '../components/About'
import Header from '../shared/header'


const screens = {

    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            // title: "Home"
            return {
                headerTitle: () => <Header navigation={navigation}></Header>
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#90636b',
        headerStyle: { backgroundColor: 'pink' }
    }
})

export default AboutStack