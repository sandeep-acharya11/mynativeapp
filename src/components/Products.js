import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Button, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { GetAllProducts } from '../actions/products'
import Product from '../reducers/product'
import { Card } from 'react-native-elements'

const Products = ({ navigation }) => {
    const { allProducts, isLoading } = useSelector(state => state.Product)
    const dispatch = useDispatch();

    useEffect(() => {
        if (allProducts.length == 0) {
            console.log("Dispatching GET_ALL")
            dispatch(GetAllProducts())
        }
    }, [])

    useEffect(() => {
        console.log('Products Loaded :: ' + allProducts.length)
    }, [allProducts])

    return (
        <ScrollView>
            {/* <View style={styles.container}> */}
            <Card  containerStyle={{padding: 10, margin:0}}>
                {
                    isLoading ? <ActivityIndicator size='large'></ActivityIndicator> :
                        allProducts.map(x =>
                            <TouchableOpacity style={styles.button} key={x.ProductId} onPress={() => {
                                navigation.navigate('ProductDetails')
                            }}>
                                <Text style={styles.cellText}>
                                    {x.ProductName}
                                </Text>
                                <Text style={{ fontStyle: 'italic', color: 'white', lineHeight: 20 }}>
                                    {x.Description}
                                </Text>
                            </TouchableOpacity>
                        )
                }
                {/* </View> */}
            </Card>
        </ScrollView>
    )
}

export default Products


const styles = StyleSheet.create({
    cellText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        letterSpacing: 2
    },
    container: {
        // flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        margin: 10
        // borderColor: 'black',
        // borderWidth: 1,
        // alignItems:'center'
    },
    normalButton: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        // borderColor: '#ccc',
        // borderWidth: 1
    },
    button: {
        // justifyContent: "center",
        // alignItems: "center",
        // width:100,
        // backgroundColor: "#DDDDDD",
        // padding: 10,

        // borderColor: '#ccc',
        // borderWidth: 1
        marginBottom: 10,
        elevation: 8,
        backgroundColor: "#563e3e",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

