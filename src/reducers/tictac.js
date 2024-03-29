import { MARK_CELL, CLEAR_BOARD, UPDATE_WINNER } from "../actions/constants";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";


const initialState = {
    player1: { name: 'Player 1-[X]', symbol: 'X' },
    player2: { name: 'Player 2-[O]', symbol: 'O' },
    cells: Array(9),
    markPlayed: '',
    scores: []
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
        case UPDATE_WINNER:
            return { ...state, scores: action.payload.winner }
        default:
            return { ...state }
    }
}

export default TicTac