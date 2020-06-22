import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const STORE = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
export default STORE;