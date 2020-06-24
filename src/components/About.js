import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const About = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.cellText}>A dream doesn't become reality through magic; it takes sweat, determination, and hard work. 
            </Text><Text style={styles.cellText}>Dynamic knowledge in respective field, practical skills in almost every part and zeal to rise higher with every passing moment
            Mahak Sharma, the Founder of Mahak Bakes, started her journey. </Text><Text style={styles.cellText}>The journey is never-ending and so is her determination. 
            It’s been just a few miles, a journey of a thousand miles still awaits</Text>
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