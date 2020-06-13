import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "../Sagas";

// const sagaMiddleware = createSagaMiddleware();

const STORE = createStore(
    rootReducer,
    // applyMiddleware(sagaMiddleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
// sagaMiddleware.run(rootSaga)
export default STORE;