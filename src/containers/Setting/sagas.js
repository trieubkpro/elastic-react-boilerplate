import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import {
    SET_ONLY_SHOW_2_PRODUCTS,
    SET_ONLY_SHOW_2_PRODUCTS_START,
    SET_ONLY_SHOW_2_PRODUCTS_SUCCESS,
    SET_ONLY_SHOW_2_PRODUCTS_ERROR
} from './constants';

function* setSettings(action) {    
    yield put({ type: SET_ONLY_SHOW_2_PRODUCTS_START });

    try 
    {
        // gia su day la qua trinh bat dong bo, request len server
        // const products = yield axios.post('').then(response => response.data);
        
        yield put({ type: SET_ONLY_SHOW_2_PRODUCTS_SUCCESS, data: action.payload });
    } catch {
        yield put({ type: SET_ONLY_SHOW_2_PRODUCTS_ERROR });
    }
}

function* watchUpdateAmountToShow() {    
    yield takeLatest(SET_ONLY_SHOW_2_PRODUCTS, setSettings);
}

export default function* settingSaga() {
    yield all([
        watchUpdateAmountToShow()
    ])
}