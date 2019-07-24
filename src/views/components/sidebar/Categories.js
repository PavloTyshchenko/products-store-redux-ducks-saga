import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

import { productActions } from '../../../state/product';

import './Categories.css';

const Categories = (props) => {

    const { 
        history,
        categories,
        category,
        search_term,
        searchRequest
     } = props;

    const items = categories.map((item, key) => {

        return (
            <ListGroup.Item
                active={item === category}
                key={key}
                as="li"
                onClick={() => onItemSelect(item)}>
                {item}
            </ListGroup.Item>
        );
    });

    const onItemSelect = (item) => {
        if (search_term) {
            history.push(`/products/${item}/${search_term}`);
        } else {
            history.push(`/products/${item}`);
        }
        searchRequest(item, '');
    };

    return (
        <ListGroup as="ul" className="mb-3">
            {items}
        </ListGroup>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.product.categories,
        category: state.product.category,
        search_term: state.product.search_term
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchRequest: (category, search_term) => {
            dispatch(productActions.searchRequest(category, search_term));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));
