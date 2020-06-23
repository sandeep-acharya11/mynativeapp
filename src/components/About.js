import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const About = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.cellText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
            type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. </Text><Text style={styles.cellText}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem
             Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            {/* <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Products')
            }}>
                <Text style={{color:'white'}}>Explore Products</Text>
            </TouchableOpacity> */}
        </ScrollView>
    )
}
//f79aaa


export default About


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "center",
        paddingHorizontal: 10,
        // borderColor: 'black',
        // borderWidth: 1,
        // alignItems:'center'
    },
    cellText: {
        fontSize: 16,
        alignSelf: "center",
        padding:10

    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        // width:100,
        // backgroundColor: "#DDDDDD",
        color: "#fff",
        padding: 10,
        marginTop:20,
        fontSize:16,
        // borderColor: '#ccc',
        // borderWidth: 1
        marginBottom: 10,
        elevation: 8,
        backgroundColor: "#905656",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
})