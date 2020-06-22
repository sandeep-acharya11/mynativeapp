import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_SUCCESS } from "../actions/constants";
import { GET_ALL_PRODUCTS_URL } from '../sagas/constants'
import { put, takeEvery, call } from "redux-saga/effects";
// import axios from 'axois'
import Axios from "axios";

function* GetAllProducts() {
    try {
        // yield put({ type: LOADING_START });
        console.log("calling :: " + GET_ALL_PRODUCTS_URL)
        const response = yield call(Axios, {
            method: "GET",
            url: GET_ALL_PRODUCTS_URL
        })
        // yield put({ type: LOADING_STOP })
        yield put({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
        console.log("Error :: " + error.message + error.stackTrace)
        // yield put({ type: LOADING_STOP })
        // yield put({type:ERROR_OCCURED, payload: error})
        // yield put(ErrorOccured(error));
        // yield put({ type: FETCH_DATA_FAILURE, payload: error })
    }
}

// It is instanciated only when Application starts for the first time and then it keeps watching for the ACTION
export function* ProductSagaWatcher() {
    console.log("Listening to actions..")
    yield takeEvery(GET_ALL_PRODUCTS, GetAllProducts)
}