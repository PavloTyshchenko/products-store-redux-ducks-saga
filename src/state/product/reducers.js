import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,

    SEARCH_REQUEST,
    SET_CURRENT_PRODUCTS,

    SET_LOADING,
    CLEAR_PRODUCTS,
} from './types';

const initialState = {
    products: [],
    categories: [],
    currentProducts: [],

    search_term: '',
    category: 'All',
    showClear: false,

    loading: true,
    error: null
};

export default function product(state = initialState, action = {}) {
    switch (action.type) {

        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
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
            
        case SEARCH_REQUEST:
            return {
                ...state,
                category: action.payload.category,
                search_term: action.payload.search_term,
                showClear: true,
                loading: true
            }
        case SET_CURRENT_PRODUCTS:
            return {
                ...state,
                currentProducts: action.payload,
                loading: false
            }
        // --------------------
        case CLEAR_PRODUCTS:
            return {
                ...state,
                currentProducts: [],
                category: 'All',
                search_term: '',
                showClear: false,
                loading: false
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

// **************************** UTILS *******************************


// Forming array of categories from array of products
const formCategories = (products) => {
    const arr = [];
    arr.push("All"); // Initial category "ALL", not presented in json data.

    products.forEach((product) => {
        if (arr.indexOf(product.bsr_category) === -1)
            arr.push(product.bsr_category);
    });

    return arr;
};
