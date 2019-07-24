import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store from './configureStore';

import './index.css';

render(
    <App store={store} />,
    document.getElementById('root')
);
