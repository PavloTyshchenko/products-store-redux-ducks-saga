import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './ducks/products';


const rootReducer = combineReducers({ products: reducers.default});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(reducers.watchProductsActions);

export default store;