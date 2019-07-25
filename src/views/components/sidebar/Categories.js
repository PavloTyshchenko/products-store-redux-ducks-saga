import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

import * as productDuck from '../../../ducks/products';

import './Categories.css';

const Categories = (props) => {

    const { 
        history,
        categories,
        category,
        search_term,
        searchProducts
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
        searchProducts(item, '');
    };

    return (
        <ListGroup as="ul" className="mb-3">
            {items}
        </ListGroup>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.products.categories,
        category: state.products.category,
        search_term: state.products.search_term
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchProducts: (category, search_term) => {
            dispatch(productDuck.searchProducts(category, search_term));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));
