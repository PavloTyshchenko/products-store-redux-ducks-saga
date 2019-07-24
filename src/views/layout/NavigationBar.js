import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {

    return (
        <Navbar bg="primary" variant="dark" className="mb-3">
            <Navbar.Brand href="#home">Products Store</Navbar.Brand>

            <Nav className="mr-auto">

                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Link style={{ color: "white", marginRight: "1rem"}} to="/">Home</Link>
            <Link style={{ color: "white", marginRight: "1rem"}} to="/products/All">Products</Link>
            <Link style={{ color: "white", marginRight: "1rem"}} to="/about">About</Link>

        </Navbar>
    )
};

export default NavigationBar;
