import {
    // fetch products
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,

    SEARCH_REQUEST,
    SET_CURRENT_PRODUCTS, 

    CLEAR_PRODUCTS,
    SET_LOADING
} from './types';

// ---------------------ACTION CREATORS-------------------------

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

export const searchRequest = (category, search_term) => {
    return {
        type: SEARCH_REQUEST,
        payload: { category, search_term }
    }
};
export const setCurrentProducts = (currentProducts) => {
    return {
        type: SET_CURRENT_PRODUCTS,
        payload: currentProducts
    };
};

// Clear Filter and current Products
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

