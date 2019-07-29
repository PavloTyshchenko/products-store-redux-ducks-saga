import React from 'react'

import './Spinner.css';

const Spinner = () => {
    return (
        <div className="lds-facebook" data-test="spinnerComponent"><div></div><div></div><div></div></div>
    );
};

export default Spinner;
