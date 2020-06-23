import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Header({ navigation }) {
    const menuHandler = () => {
        // alert('menu clicker')
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            {/* ICON for menu */}
            <TouchableOpacity onPress={menuHandler}>
                <Text>
                    Menu 
                </Text>
            </TouchableOpacity>
            <View>
                <Text>
                    Mahak Bakes
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})