import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProductCategories from './ProductCategories'
import { Card } from 'react-native-elements'

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Card containerStyle={{padding: 10, margin:0}}>
                <ProductCategories navigation={navigation}></ProductCategories>
                <Text style={styles.cellText}>All our products are homemade, eggless and no artificial checmicals used. They are all baked with a lots of love, passion and perfection so that you can enjoy special moments with your dearest ones. </Text>
                <Text style={styles.cellText}>Please dont forget to share your comments on feedback section. This will encourage us to serve you better again and agan.</Text>
                
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Products')
                }}>
                    <Text style={{ color: '#563e3e', fontWeight: 'bold' }}>Explore all</Text>
                </TouchableOpacity>
            </Card>
        </ScrollView>
    )
}
//f79aaa


export default Home


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "center",
        // paddingHorizontal: 10,
        // marginTop: 10,
        // backgroundColor:'pink'
        // borderColor: 'black',
        // borderWidth: 1,
        // alignItems:'center'
    },
    cellText: {
        fontSize: 14,
        alignSelf: "center",
        // padding: 10
        marginTop: 10,
        lineHeight: 20

    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        // width:100,
        // backgroundColor: "#DDDDDD",
        // color: "#fff",
        // padding: 10,
        marginTop: 20,
        fontSize: 16,
        // borderColor: '#ccc',
        // borderWidth: 1
        marginBottom: 10,
        elevation: 8,
        // backgroundColor: "#905656",
        borderRadius: 10,
        backgroundColor: "pink",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
})