import { combineReducers } from 'redux';
import productsReducer from '../src/containers/ProductDashboard/reducer';

export default function createReducers(injectedReducers = {}) {
    const rootReducer = combineReducers({        
        blank: function(state, action) {if (state == null) state = []; return state;},
        productsReducer: productsReducer,
        ...injectedReducers
    });

    return rootReducer;
}