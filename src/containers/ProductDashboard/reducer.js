import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from './constants';

const initialState = {
    products: [],
    loading: false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_START:
            return { ...state, loading: true };
        case GET_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: [...state.products, action.data] };
        case GET_PRODUCTS_ERROR:
            return state;   
        default:
            return state;         
    }
}

export default productsReducer;