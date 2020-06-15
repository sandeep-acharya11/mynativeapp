import { combineReducers } from "redux";
// import Item from "./item";
// import Loading from './loading'
// import Error from './error'

import Feedback from './feedback'
import TicTac from './tictac'


const rootReducer = combineReducers({
    Feedback,
    TicTac
});

export default rootReducer