
import { FETCH_FEEDBACK, CLEAR_FEEDBACK, MARK_CHECKED } from '../actions/constants'

const initialState = {
    feedbacks: []
}

const Feedback = (state = initialState, action) => {
    console.log("Feedback reducer:")
    switch (action.type) {
        case FETCH_FEEDBACK:
            var returnObj = { ...state }
            returnObj.feedbacks.push({ title: action.payload.title, id: action.payload.id, isSelected: false })
            return { ...returnObj }

        case CLEAR_FEEDBACK:
            var returnObj = { ...state }
            returnObj.feedbacks = []
            return { ...returnObj }
        case MARK_CHECKED:
            var returnObj = { ...state }
            returnObj.feedbacks.find(x => x.id === action.payload.id).isSelected = action.payload.isSelected
            // returnObj.feedbacks.map(item => {
            //     console.log(item.id, item.isSelected, item.title)
            // }
            // )
            return { ...returnObj }
        default:
            return { ...state }
    }
}

export default Feedback