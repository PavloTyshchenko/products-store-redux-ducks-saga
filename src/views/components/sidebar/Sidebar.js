import React from 'react';
import PropTypes from 'prop-types';

import { Button, ListGroup } from 'react-bootstrap';

import Search from './Search';
import Categories from './Categories';

export const Sidebar = ({ showClear, clearProducts }) => {

    return (
        <ListGroup data-test="sidebarComponent">
            <Search data-test="searchInput"/>
            <Categories data-test="categories"/>
            {
                showClear &&
                <Button data-test="clearButton"
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
    clearProducts: () => {}
};

export default Sidebar;
