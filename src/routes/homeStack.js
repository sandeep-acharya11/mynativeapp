import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
// import TicTac from '../components/TicTac'
import Products from '../components/Products'
import Home from '../components/Home'
import ProductDetails from '../components/ProductDetails'
import Header from '../shared/header'
import React from 'react'
// import { Text } from 'react-native'

const screens = {

    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            // title: "Home"
            return {
                headerTitle: () => <Header navigation={navigation}></Header>
            }
        }
    },
    Products: {
        screen: Products,
        navigationOptions: ({ navigation }) => {
            // title: "Home"
            return {
                headerTitle: () => <Header showMenuIcon='false' title='Products' navigation={navigation}></Header>,
                // headerRight: () => <Text></Text>,
                // headerLeft: () => <Text></Text>
            }
        }
    },//ProductDetails
    ProductDetails: {
        screen: ProductDetails,
        navigationOptions: ({ navigation }) => {
            // title: "Home"
            return {
                headerTitle: () => <Header showMenuIcon='false' title='Product Details' navigation={navigation}></Header>,
                // headerRight: () => <Text></Text>,
                // headerLeft: () => <Text></Text>
            }
        }
    },//ProductDetails
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#90636b',
        headerStyle: { backgroundColor: 'pink' }
    }
})

export default HomeStack