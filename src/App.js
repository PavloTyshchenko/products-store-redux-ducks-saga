import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './views/layout/Layout';
import HomePage from './views/pages/HomePage';
import AboutPage from './views/pages/AboutPage';
import ProductsPage from './views/pages/ProductsPage';

const App = () => {
  return (
        <Router>
          <Layout>
            <Switch>

              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
              <Route path='/products/:category?/:term?' component={ProductsPage} />

            </Switch>
          </Layout>
        </Router>
  );
};

export default App;
