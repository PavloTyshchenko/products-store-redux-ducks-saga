import { call, put } from 'redux-saga/effects';

import reducer from '../products';
import axios from 'axios';
import api from '../../api';

import {
    getProductsSaga,
    productsRequested,
    productsLoaded,
    productsFailure,
    searchProducts,
    clearProducts,
    setLoading
} from '../products';

const FETCH_PRODUCTS_REQUEST = 'product/FETCH_PRODUCTS_REQUEST';
const FETCH_PRODUCTS_SUCCESS = 'product/FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE = 'product/FETCH_PRODUCTS_FAILURE';
const SEARCH_PRODUCTS = 'product/SET_CURRENT_PRODUCT';
const CLEAR_PRODUCTS = 'product/CLEAR_PRODUCTS';
const SET_LOADING = 'product/SET_LOADING';

describe('TEST Products ducks', () => {

    describe('TEST Actions', () => {

        describe('TEST simple actions', () => {

            test('TEST Should create action to search products request.', () => {

                const expectedAction = {
                    type: FETCH_PRODUCTS_REQUEST
                };
                expect(productsRequested()).toEqual(expectedAction);
            });

            test('TEST Should create action to search products.', () => {
                const category = 'All';
                const search_term = 'red';
                const expectedAction = {
                    type: SEARCH_PRODUCTS,
                    payload: { category, search_term }
                };
                expect(searchProducts(category, search_term)).toEqual(expectedAction);
            });

            test('TEST Should create action to clear products.', () => {
                const expectedAction = {
                    type: CLEAR_PRODUCTS
                };
                expect(clearProducts()).toEqual(expectedAction);
            });

            test('TEST Should create action to set loading.', () => {
                const expectedAction = {
                    type: SET_LOADING
                };
                expect(setLoading()).toEqual(expectedAction);
            });
        });

    });

    describe('TEST reducer ', () => {

        test('TEST Should create empty reducer with initial state.', () => {
            const zeroReducer = reducer(undefined, {});
            expect(zeroReducer).toEqual({
                products: [],

                categories: [],
                search_term: '',
                category: 'All',

                showClear: false,
                loading: false,
                error: null
            });

        });

        test('TEST Should not change state on loading.', () => {
            const reducerTest = reducer([], {
                type: FETCH_PRODUCTS_REQUEST
            });
            expect(reducerTest).toEqual({
                loading: true
            });
        });

        test('TEST Should write empty arr in products and categories when received payload is undefined.', () => {
            const reducerTest = reducer([], {
                type: FETCH_PRODUCTS_SUCCESS,
                payload: undefined
            });
            expect(reducerTest).toEqual({
                products: [],
                categories: [],
                loading: false
            });
        });

        test('TEST Should write payload in products and categories when received payload is not undefined.', () => {
            const reducerTest = reducer([], {
                type: FETCH_PRODUCTS_SUCCESS,
                payload: []
            });
            expect(reducerTest).toEqual({
                products: [],
                categories: ["All"],
                loading: false
            });
        });

        test('TEST Should write empty arr in products and categories and write error when received an error.', () => {
            const reducerTest = reducer([], {
                type: FETCH_PRODUCTS_FAILURE,
                payload: 'error'
            });
            expect(reducerTest).toEqual({
                products: [],
                categories: [],
                loading: false,
                error: 'error'
            });
        });

        test('TEST Should write category and search term on searching, sets showClear: true', () => {
            const reducerTest = reducer([], {
                type: SEARCH_PRODUCTS,
                payload: { category: 'category', search_term: 'search_term' }
            });
            expect(reducerTest).toEqual({
                category: 'category',
                search_term: 'search_term',
                showClear: true
            });
        });

        test('TEST Should set: category to "All", search term to "", showClear to false on Clearing products filter', () => {
            const reducerTest = reducer([], {
                type: CLEAR_PRODUCTS
            });
            expect(reducerTest).toEqual({
                category: 'All',
                search_term: '',
                showClear: false
            });
        });

        test('TEST Should set loading to true', () => {
            const reducerTest = reducer([], {
                type: SET_LOADING
            });
            expect(reducerTest).toEqual({
                loading: true
            });
        });
    });
});

