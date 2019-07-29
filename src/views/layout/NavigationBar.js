import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {

    return (
        <Navbar bg="primary" variant="dark" className="mb-3">
            <LinkContainer to="/">
                <Navbar.Brand>Navbar</Navbar.Brand>
            </LinkContainer>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/products/All'>Products</Nav.Link>
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
            </Nav>

        </Navbar>
    );
};

export default NavigationBar;
