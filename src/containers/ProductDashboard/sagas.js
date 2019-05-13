import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import {
    GET_PRODUCTS,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from './constants';

function* getProducts() {    
    yield put({ type: GET_PRODUCTS_START });

    try 
    {
        //const products = yield axios.get('').then(response => response.data);
        yield put({ type: GET_PRODUCTS_SUCCESS, data: {id: 1, name: 'biscuist'} });
    } catch {
        yield put({ type: GET_PRODUCTS_ERROR });
    }
}

function* watchGetPosts() {
    yield takeLatest(GET_PRODUCTS, getProducts);
}

export default function* productsListSaga() {
    yield all([
        watchGetPosts()
    ])
}