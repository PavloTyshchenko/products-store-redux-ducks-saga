import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import Sidebar from '../components/sidebar/Sidebar';
import Products from '../components/products/Products';

import * as productDuck from '../../ducks/products';

export const ProductsPage = (props) => {

    const {
        getProducts,
        searchProducts,
        showClear,
        clearProducts
    } = props;

    const { category, term } = props.match.params;

    useEffect(() => {

        getProducts();

        // check with params category and term - if they are - dispatch action
        if (category && !term) {
            searchProducts(category, undefined);
        };

        if (category && term) {
            searchProducts(category, term);
        };

        // eslint-disable-next-line
    }, []);

 
    const clearProductsHandler = () => {
        props.history.push(`/products/All`);
        clearProducts()
    }

    return (
        <Row data-test="productsPage">
            <Col md={3}>
                <Sidebar showClear={showClear} clearProducts={clearProductsHandler} />
            </Col>

            <Col md={9} >
                <Products />
            </Col>
        </Row>
    );
};

function mapStateToProps(state) {
    return {
        showClear: state.products.showClear
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            dispatch(productDuck.productsRequested());
        },
        clearProducts: () => {
            dispatch(productDuck.clearProducts());
        },
        searchProducts: (category, search_term) => {
            dispatch(productDuck.searchProducts(category, search_term));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsPage));
