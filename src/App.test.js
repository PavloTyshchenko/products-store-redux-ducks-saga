import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './ducks/products';
import { shallow } from 'enzyme';

import App from './App';

const rootReducer = combineReducers({products: reducers.default});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

it('should render with redux store without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

// SNAPSHOT

it("should render App component and match to snapshot", () => {
    const rendered = shallow(<Provider store={store}><App/></Provider>);
    expect(rendered.debug()).toMatchSnapshot()
});