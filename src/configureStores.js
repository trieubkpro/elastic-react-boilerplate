import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import productSaga from '../src/containers/ProductDashboard/sagas';

export default function configureStore() {
  const initialState = {};
  
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    createReducer(),
    //initialState,
    applyMiddleware(sagaMiddleware)
    // compose(...[applyMiddleware(...middlewares)])
    );

    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    sagaMiddleware.run(productSaga);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
          store.replaceReducer(createReducer(store.injectedReducers));
        });
      }
    
    return store;
}