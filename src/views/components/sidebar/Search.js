import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import * as productDuck from '../../../ducks/products';

export const Search = (props) => {

    const [text, setText] = useState('');

    const {
        history,
        match,
        category,
        searchProducts
    } = props;

    // add same search term in field if there is param in url
    useEffect(() => {
        if (match.params.term)
            setText(match.params.term);
        // eslint-disable-next-line
    }, []);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (text !== '') {
            history.push(`/products/${category}/${text}`);
            searchProducts(category, text);
        }
    };

    return (
        <Form onSubmit={onSubmit} data-test="searchComponent">
            <Form.Group>
                <Form.Control data-test="search-input"
                    type="text"
                    onChange={onChange}
                    value={text}
                    placeholder="Search Products..." />
            </Form.Group>
        </Form>
    );
};

const mapStateToProps = (state) => {
    return {
        category: state.products.category,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchProducts: (category, search_term) => {
            dispatch(productDuck.searchProducts(category, search_term));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
