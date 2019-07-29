import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const ProductItem = ({ product: { img, name, price, currency, link } }) => {

    return (
        <Card data-test="productItemCard">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>
                    <a href={link}>{name}</a>
                </Card.Title>
                <Card.Text>
                    Price: {price} ({currency})
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductItem;
