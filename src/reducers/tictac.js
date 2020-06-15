import { MARK_CELL, CLEAR_BOARD } from "../actions/constants";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";


const initialState = {
    player1: { name: 'Player 1', symbol: 'X' },
    player2: { name: 'Player 2', symbol: 'O' },
    cells: Array(9),
    markPlayed: ''
}
const TicTac = (state = initialState, action) => {
    switch (action.type) {
        case MARK_CELL:
            console.log("Mark Playing :: ", action.payload.markPlaying)
            var returnVar = { ...state }
            returnVar.cells[action.payload.cellId] = action.payload.markPlaying
            return { ...returnVar, markPlayed: action.payload.markPlaying }
        case CLEAR_BOARD:
            return { ...state, cells: [], markPlayed: '' }
        default:
            return { ...state }
    }
}

export default TicTac