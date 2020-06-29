import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { color } from 'react-native-reanimated'


const ProductCategories = ({ navigation }) => {
    return (
        <>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
                    Browse By Categories
            </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity style={styles.cardStyle} onPress={() => {
                    // alert('clicked')
                    navigation.navigate('Products')
                }}>
                    <Image style={{width:60, height:60}} source={require('../asset/anniversary.png')} />
                    <Text style={styles.cellText}>
                        Anniversary
            </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardStyle} onPress={() => {
                    navigation.navigate('Products')
                }}>
                    <Image style={{width:60, height:60}} source={require('../asset/birthday.png')} />
                    <Text style={styles.cellText}>
                        Birthday
            </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cardStyle} onPress={() => {
                    navigation.navigate('Products')
                }}>
                    <Image style={{width:60, height:60}} source={require('../asset/other.png')} />
                    <Text style={styles.cellText}>
                        Occasion
            </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ProductCategories



const styles = StyleSheet.create({
    cardStyle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'pink',
        margin: 5,
        width: 100,
        height: 100,
        borderColor: '#ccc',
        // borderWidth: 1,
        elevation: 4,
    },
    cellText: {
        fontWeight: "bold",
        justifyContent: "center",
        color:'#563e3e'
    },
})