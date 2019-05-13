import {
    SET_ONLY_SHOW_2_PRODUCTS_START,
    SET_ONLY_SHOW_2_PRODUCTS_SUCCESS,
    SET_ONLY_SHOW_2_PRODUCTS_ERROR
} from './constants';

const initialState = {
    show2Products: false
}

const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ONLY_SHOW_2_PRODUCTS_START:
            return state;
        case SET_ONLY_SHOW_2_PRODUCTS_SUCCESS:            
            return { ...state, show2Products: action.data };
        case SET_ONLY_SHOW_2_PRODUCTS_ERROR:
            return state;
        default:
            return state;            
    }
}

export default settingReducer;