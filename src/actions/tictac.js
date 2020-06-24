import { MARK_CELL, CLEAR_BOARD } from "./constants"

export const MarkCell = (cellid, markPlaying) => (
    {
        type:MARK_CELL,
        payload:{cellId:cellid, markPlaying: markPlaying}
    }
)

export const ClearBoard = () => (
    {
        type: CLEAR_BOARD,
        payload:[]
    }
)