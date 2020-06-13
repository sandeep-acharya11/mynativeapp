import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, TextInput, SafeAreaView, FlatList, StyleSheet, ScrollView, CheckBox } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { FetchFeedbacks, ClearFeedbacks, MarkChecked } from '../actions/feedback';
// import { CheckBox } from 'react-native-elements'

export default function Feedbacks() {
    const dispatch = useDispatch();
    const { feedbacks } = useSelector(state => state.Feedback)
    const [value, onChangeText] = useState('');


    useEffect(() => {
        console.log(feedbacks.length)
    }, [feedbacks])

    function handleClearAll() {
        dispatch(ClearFeedbacks())
    }

    const handleCheckBoxChange = (id, enabled) => {
        // console.error(value)
        // const { id, enabled } = event._targetInst.memoizedProps;
        debugger;
        dispatch(MarkChecked(parseInt(id), enabled))
    }

    function handleClick() {
        if (value != '') {
            dispatch(FetchFeedbacks({ title: value, id: feedbacks.length + 1 }))
        }
        onChangeText('')
    }
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    {feedbacks.map
                        (
                            item =>
                                <Text style={item.isSelected ?  styles.item_inactive : styles.item_active}>

                                    <CheckBox id={item.id} value={item.isSelected} onValueChange={value => {
                                        handleCheckBoxChange(`${item.id}`, value);
                                    }} style={styles.checkbox}></CheckBox>
                                    {item.title}
                                </Text>
                        )
                    }
                </ScrollView>

                <TextInput name="title" style={styles.inputText} value={value} onChangeText={text => onChangeText(text)}></TextInput>
                <View style={{ flexDirection: "row", justifyContent: 'space-around', marginBottom: 10 }}>
                    <Button color='orange'
                        title="Post and Fetch"
                        onPress={handleClick}
                    />
                    <Button
                        title="Clear All"
                        onPress={handleClearAll}
                    />
                </View>
            </SafeAreaView>

        </>
    )
}


const styles = StyleSheet.create({
    checkbox: {
        alignSelf: "center",
        width: 30,
        height: 10

    },
    inputText: {
        marginBottom: 10,
        marginTop: 10,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1
    },
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f3f",
        alignItems: "stretch"
    },
    title: {
        fontSize: 20,
        color: "#fff"
    },
    item_active: {
        backgroundColor: "#f1f1f1",
        flex: 1,
        padding: 5,
        marginTop: 5
    },
    item_inactive:{
        color: "#cccccc",
        flex: 1,
        padding: 5,
        marginTop: 5
    }
});