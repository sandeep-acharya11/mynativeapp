import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { ClearBoard } from '../actions/tictac'
import { UPDATE_WINNER } from '../actions/constants'

const Score = () => {

    const { cells, markPlayed, player1, player2, scores } = useSelector(state => state.TicTac)
    const dispatch = useDispatch();
    const winningCombinations = ['0,1,2', '3,4,5', '6,7,8', '0,3,6', '1,4,7', '2,5,8', '0,4,8', '2,4,6']

    function CheckWinningStatus() {
        var winner;
        winningCombinations.map(combination => {
            var cellids = combination.split(',')
            console.log("Checking for : " + combination + " :: " + cells[cellids[0]] + "," + cells[cellids[1]] + "," + cells[cellids[2]])

            if (cells[cellids[0]] && (cells[cellids[0]] == cells[cellids[1]] && cells[cellids[0]] == cells[cellids[2]])) {
                winner = player1.symbol === cells[cellids[0]] ? player1 : player2
                Alert.alert(
                    'Winner',
                    winner.name + ' has won the game.',
                    [
                        {
                            text: 'OK',
                            onPress: () => { dispatch(ClearBoard()), dispatch({ type: UPDATE_WINNER, payload: winner }) }
                        }],
                    { cancelable: false }
                );
            }
        })

        if (winner === undefined) {
            var matchDrawn = ((cells.filter(x => (x === 'X' || x === 'O')).length == 9) ? true : false)
            console.log('Drawn :: ' + matchDrawn)
            if (matchDrawn)
                Alert.alert(
                    'Drawn',
                    'Match has been drawn with no result',
                    [
                        {
                            text: 'OK',
                            onPress: () => { dispatch(ClearBoard()) }
                        }],
                    { cancelable: false }
                );
        }
    }
    useEffect(() => {
        CheckWinningStatus()
    }, [markPlayed]) // For any change in cells state will check for the winner

    return (
        <View>
            <Text>

            </Text>
        </View>

    )
}

export default Score