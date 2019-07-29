import React from 'react'
import { Container } from 'react-bootstrap';

import NavigationBar from './NavigationBar';

const Layout = props => {
    return (
        <Container data-test="container">
            <NavigationBar data-test="navBar"/>
            {props.children}
        </Container>
    );
};

export default Layout;
