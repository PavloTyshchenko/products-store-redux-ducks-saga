import React from 'react'
import { Container } from 'react-bootstrap';

import NavigationBar from './NavigationBar';

const Layout = props => {
    return (
        <Container>
            <NavigationBar />
            {props.children}
        </Container>
    );
};

export default Layout;
