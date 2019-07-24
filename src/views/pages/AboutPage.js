import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

const AboutPage = props => {
    return (
        <Jumbotron>
            <h1>About</h1>
            <p>
                This is a simple react application to test myself,
                practice skills and obtain some new knowledge
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    );
};

export default AboutPage;
