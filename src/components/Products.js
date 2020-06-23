import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Button, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { GetAllProducts } from '../actions/products'
import Product from '../reducers/product'

const Products = () => {
    const { allProducts, isLoading } = useSelector(state => state.Product)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Dispatching GET_ALL")
        dispatch(GetAllProducts())
    }, [])

    useEffect(() => {
        console.log('Products Loaded :: ' + allProducts.length)
    }, [allProducts])

    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    isLoading ? <ActivityIndicator size='large'></ActivityIndicator> :
                        allProducts.map(x =>
                            <TouchableOpacity style={styles.button} key={x.ProductId}>
                                <Text style={styles.cellText}>
                                    {x.ProductName}
                                </Text>
                                <Text style={{ fontStyle: 'italic', color: 'white' }}>
                                    {x.Description}
                                </Text>
                            </TouchableOpacity>
                        )
                }
            </View>
        </ScrollView>
    )
}

export default Products


const styles = StyleSheet.create({
    cellText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    container: {
        // flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        margin:10
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
        padding: 10,

        // borderColor: '#ccc',
        // borderWidth: 1
        marginBottom: 10,
        elevation: 8,
        backgroundColor: "#905656",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

