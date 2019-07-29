import React from 'react';
import { connect } from 'react-redux';

import { CardColumns, Alert, Container } from 'react-bootstrap';

import ProductItem from './ProductItem';
import Spinner from '../spinner/Spinner';

export const Products = (props) => {

    const {
        products,
        category,
        search_term,
        loading,
        showClear
    } = props;

    if (loading) {
        return (
            <Container className="text-center">
                <Spinner data-test="spinner"/>
            </Container>
        );
    };

    let items = products;
    items = filterProducts(category, search_term, products);
    
    if (showClear && items.length === 0 && !loading) {
        return (
            <Alert variant='secondary' data-test="alert">
                Unfortunately no matches ...
            </Alert>
        );
    };

    
    return (
        <CardColumns className="mb-3" data-test="productsComponent">
            {
                items.map((product) => {
                    return <ProductItem key={product.name} product={product} />
                })
            }
        </CardColumns>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        category: state.products.category,
        search_term: state.products.search_term,
        loading: state.products.loading,
        showClear: state.products.showClear
    };
};

export default connect(mapStateToProps)(Products);


// ----------------- UTIL -----------------------
export const filterProducts = (category, search_term, products) => {

    let filtered = [];

    if (category !== 'All') {
        filtered = products
            .filter((product) => {
                return product.bsr_category.toLowerCase().indexOf(category.toLowerCase()) > -1
            });
    } else {
        filtered = products;
    }

    if (search_term) {
        filtered = filtered.filter((product) => {
            return product.name.toLowerCase().indexOf(search_term.toLowerCase()) > -1
        });
    };

    return filtered;
};