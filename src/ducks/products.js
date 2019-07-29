import {
    put,
    call,
    all,
    takeEvery,
} from 'redux-saga/effects';

import api from '../api';

// --------------------- Action types ----------------
const FETCH_PRODUCTS_REQUEST = 'product/FETCH_PRODUCTS_REQUEST';
const FETCH_PRODUCTS_SUCCESS = 'product/FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE = 'product/FETCH_PRODUCTS_FAILURE';
const SEARCH_PRODUCTS = 'product/SET_CURRENT_PRODUCT';
const CLEAR_PRODUCTS = 'product/CLEAR_PRODUCTS';
const SET_LOADING = 'product/SET_LOADING';

// ------------------ Action creators--------------------

// Fetch products request
export const productsRequested = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    };
};
// Fetch products success
export const productsLoaded = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    };
};
// Fetch products failure
export const productsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    };
};

// Search products. Sets category and search_term
export const searchProducts = (category, search_term) => {
    return {
        type: SEARCH_PRODUCTS,
        payload: { category, search_term }
    };
};
// Clear Filter
export const clearProducts = () => {
    return {
        type: CLEAR_PRODUCTS
    }
};
// Set loading 
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};

// --------------------- Reducer ---------------------
const initialState = {
    products: [],

    categories: [],
    search_term: '',
    category: 'All',

    showClear: false,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload !== undefined ? action.payload : [],
                categories: formCategories(action.payload),
                loading: false
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                products: [],
                categories: [],
                loading: false,
                error: action.payload
            };
        case SEARCH_PRODUCTS:
            return {
                ...state,
                category: action.payload.category,
                search_term: action.payload.search_term,
                showClear: true
            }
        case CLEAR_PRODUCTS:
            return {
                ...state,
                category: 'All',
                search_term: '',
                showClear: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

// --------------------- Saga ---------------------
export function* getProductsSaga() {

    yield put(setLoading());

    const response = yield call(api.fetchProducts);
    if (response.statusText === "OK") {
        yield put(productsLoaded(response.data.products));
    } else {
        yield put(productsFailure());
    }
};


export function* watchProductsActions() {
    yield all([
        takeEvery(FETCH_PRODUCTS_REQUEST, getProductsSaga)
    ])
};


// ****************** UTILS **********************


// Forming array of categories from array of products
const formCategories = (products) => {

    const arr = [];

    if (products) {
        arr.push("All"); // Initial category "ALL", not presented in json data.

        products.forEach((product) => {
            if (arr.indexOf(product.bsr_category) === -1)
                arr.push(product.bsr_category);
        });
    }

    return arr;
};