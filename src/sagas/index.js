import { all } from "redux-saga/effects";

import { ProductSagaWatcher } from "./products";

export function* rootSaga(){
    yield all([
        ProductSagaWatcher()   
             
    ])
}