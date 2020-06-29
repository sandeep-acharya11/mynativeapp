import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { DrawerItems } from 'react-navigation-drawer'
import { Icon } from 'react-native-elements'
const CustomDrawer = (props) => {
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={{ padding: 16, backgroundColor: 'pink' }}>
                    <Text style={{ letterSpacing: 5, fontWeight: 'bold', fontSize: 18 }}>
                        Welcome
                    </Text>
                    <View style={{ position: "absolute", right: 0, marginVertical: 15, marginRight: 15 }}>

                        <Icon name='close' size={30} type='material' onPress={() => {
                            props.navigation.closeDrawer()
                        }} />
                    </View>
                </View>
                <DrawerItems {...props}></DrawerItems>
            </SafeAreaView>
        </ScrollView>


    )
}

export default CustomDrawer