import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-native-elements'
import { MarkCell, ClearBoard } from '../actions/tictac'
import Score from './Score'

const Board = () => {

    const dispatch = useDispatch()
    const { cells, markPlayed } = useSelector(state => state.TicTac)

    function onBoardCellClicked(cellId) {
        if (!cells[cellId])
            dispatch(MarkCell(cellId, (markPlayed == '' || markPlayed == 'O' ? 'X' : 'O')))
    }

    return (
        <>
            <Card containerStyle={{ padding: 10, margin: 0 }}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30, letterSpacing:5}}>
                        Tic Tac Toe
                    </Text>
                    <Text style={{letterSpacing:3, fontSize:16, marginBottom:15, marginTop:12}}>
                        2 player game
                    </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onBoardCellClicked(0)
                        }}>
                        <Text style={styles.cellText}>{cells[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onBoardCellClicked(1)
                        }}>
                        <Text style={styles.cellText}>{cells[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onBoardCellClicked(2)
                        }}>
                        <Text style={styles.cellText}>{cells[2]}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onBoardCellClicked(3)
                        }}>
                        <Text style={styles.cellText}>{cells[3]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onBoardCellClicked(4)
                        }}>
                        <Text style={styles.cellText}>{cells[4]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onBoardCellClicked(5)
                        }}>
                        <Text style={styles.cellText}>{cells[5]}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onBoardCellClicked(6)
                        }}>
                        <Text style={styles.cellText}>{cells[6]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onBoardCellClicked(7)
                        }}>
                        <Text style={styles.cellText}>{cells[7]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            onBoardCellClicked(8)
                        }}>
                        <Text style={styles.cellText}>{cells[8]}</Text>
                    </TouchableOpacity>
                </View>
                <Score></Score>
                <TouchableOpacity style={styles.normalButton}
                    onPress={() => {
                        dispatch(ClearBoard())
                    }}>
                    <Text>Clear Board</Text>
                </TouchableOpacity>
            </Card>
        </>
    )
}

export default Board

const styles = StyleSheet.create({
    cellText: {
        fontWeight: "bold",
        fontSize: 50,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    normalButton: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#DDDDDD",
        backgroundColor:'pink',
        // padding: 10,
        width: 100,
        height: 100,
        borderColor: '#ffa2b2',
        borderWidth: 1
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

