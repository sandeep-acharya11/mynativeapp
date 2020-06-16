import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { MarkCell, ClearBoard } from '../actions/tictac'
import Score from './Score'

const Board = () => {

    const dispatch = useDispatch()
    const { cells, markPlayed } = useSelector(state => state.TicTac)

    function onBoardCellClicked(cellId) {
        dispatch(MarkCell(cellId, (markPlayed == '' || markPlayed == 'O' ? 'X' : 'O')))
    }

    return (
        <>
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
    normalButton:{
        marginTop:10,
        marginBottom:10,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1
    },
    button: {
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 100,
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

