import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import { productActions } from '../../../state/product';

const Search = (props) => {

    const [text, setText] = useState('');

    const {
        history,
        match,
        category,
        searchRequest
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
            searchRequest(category, text);
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Control
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
        category: state.product.category,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchRequest: (category, search_term) => {
            dispatch(productActions.searchRequest(category, search_term));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
