import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const Score = () => {

    const { cells, markPlayed } = useSelector(state => state.TicTac)
    const winningCombinations = ['0,1,2', '3,4,5', '6,7,8', '0,3,6', '1,4,7', '2,5,8', '0,4,8', '2,4,6']

    function CheckWinningStatus() {
        winningCombinations.map(combination => {
            var cellids = combination.split(',')
            console.log("Checking for : " + combination + " :: " + cells[cellids[0]] + ","+ cells[cellids[1]] + "," + cells[cellids[2]])
            // console.log("value at :: " + cells[cellids[0]])
            // console.log("value at :: " + cells[cellids[1]])
            // console.log("value at :: " + cells[cellids[2]])

            if(cells[cellids[0]] && (cells[cellids[0]] == cells[cellids[1]] && cells[cellids[0]] == cells[cellids[2]])){
                console.log('FOund winner')
            }
        })
        console.log("checked winning status")
    }
    useEffect(() => {
        CheckWinningStatus()
    }, [markPlayed]) // For any change in cells state will check for the winner



    return (
        <View>
            <Text>
                Score will appear here
            </Text>
        </View>

    )
}

export default Score