import {
    put,
    all,
    takeEvery,
} from 'redux-saga/effects';

import {
    productTypes,
    productActions,
} from '../state/product';

import axios from 'axios';

// ------------------ SAGAS ------------------

// Get all produts to state
export function* getProducts() {
    put(productActions.setLoading);

    try {
        const response = yield axios.get('https://demo8421975.mockable.io/products');
        yield put(productActions.productsLoaded(response.data.products));
    } catch (e) {
        yield put(productActions.productsFailure(e));
    }
};


// Search products by category and search term
export function* searchProducts(action) {
    put(productActions.setLoading);

    const { payload: { category, search_term } } = action;

    try {
        // fetch
        const response = yield axios.get('https://demo8421975.mockable.io/products');

        // filter
        let filtered = [];
        if (category !== 'All') {
            filtered = response.data.products
                .filter((product) => {
                    return product.bsr_category.toLowerCase().indexOf(category.toLowerCase()) > -1
                });
        } else {
            filtered = response.data.products;
        }

        if (search_term) {
            filtered = filtered.filter((product) => {
                return product.name.toLowerCase().indexOf(search_term.toLowerCase()) > -1
            });
        };

        // put in state
        yield put(productActions.setCurrentProducts(filtered))
    } catch (e) {
        console.log(e);
    }
};


export function* watchProductsActions() {
    yield all([
        takeEvery(productTypes.FETCH_PRODUCTS_REQUEST, getProducts),
        takeEvery(productTypes.SEARCH_REQUEST, searchProducts)
    ])
};