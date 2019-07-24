import React from 'react';
import { connect } from 'react-redux';

import { CardColumns, Alert, Container } from 'react-bootstrap';

import ProductItem from './ProductItem';
import Spinner from '../spinner/Spinner';

const Products = (props) => {

    const {
        products,
        currentProducts,
        loading,
        showClear
    } = props;

    if (loading) {
        return (
            <Container className="text-center">
                <Spinner />
            </Container>
        );
    };

    let items = null;
    showClear ? items = currentProducts : items = products; 

    if (showClear && currentProducts.length === 0 && !loading) {
        return (
            <Alert variant='secondary'>
                Unfortunately no matches ...
            </Alert>
        );
    };

    return (
        <CardColumns className="mb-3">
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
        products: state.product.products,
        currentProducts: state.product.currentProducts,
        loading: state.product.loading,
        showClear: state.product.showClear
    };
};

export default connect(mapStateToProps)(Products);
