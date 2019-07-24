import React from 'react';
import PropTypes from 'prop-types';

import { Button, ListGroup } from 'react-bootstrap';

import Search from './Search';
import Categories from './Categories';

const Sidebar = ({ showClear, clearProducts }) => {

    return (
        <ListGroup>
            <Search />
            <Categories />
            {
                showClear &&
                <Button
                    variant="light"
                    className="mb-3"
                    onClick={clearProducts}>
                    Clear
                </Button>
            }
        </ListGroup>
    );
};

Sidebar.propTypes = {
    showClear: PropTypes.bool.isRequired,
    clearProducts: PropTypes.func.isRequired
};

Sidebar.defaultProps = {
    showClear: false,
};

export default Sidebar;
