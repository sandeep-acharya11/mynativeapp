import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default function Header({ navigation, showMenuIcon, title }) {
    const menuHandler = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            {/* ICON for menu */}
            {
                showMenuIcon != 'false' &&
                <TouchableOpacity style={{ position: "absolute", left: 0 }} onPress={menuHandler}>
                        <Icon name='menu' size={30}  type='material' />
                </TouchableOpacity>
            }<View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {
                    title ? <Text style={{ fontSize: 18, letterSpacing:2, left: -35 }}>{title}</Text> :
                        <Text style={{ fontSize: 25, letterSpacing:3 }}>
                            Mahak Bakes
                </Text>
                }
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