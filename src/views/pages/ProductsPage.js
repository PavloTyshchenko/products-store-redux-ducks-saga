import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import Sidebar from '../components/sidebar/Sidebar';
import Products from '../components/products/Products';

import { productActions } from '../../state/product';

const ProductsPage = (props) => {

    const {
        getProducts,
        searchRequest,
        showClear,
        clearProducts
    } = props;

    const { category, term } = props.match.params;

    useEffect(() => {

        if (category && !term) {
            searchRequest(category, undefined);
        };

        if (category && term) {
            searchRequest(category, term);
        };

        getProducts();

        // eslint-disable-next-line
    }, []);

 
    const clearProductsHandler = () => {
        props.history.push(`/products/All`);
        clearProducts()
    }

    return (
        <Row>
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
        showClear: state.product.showClear
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            dispatch(productActions.productsRequested());
        },
        clearProducts: () => {
            dispatch(productActions.clearProducts());
        },
        searchRequest: (category, search_term) => {
            dispatch(productActions.searchRequest(category, search_term));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsPage));
