import React from 'react';
import { Router, Route, BrowserRouter } from 'react-router-dom';

import Main from './main.js';
import Layout from './layout.js';

export default (
  <BrowserRouter>
    <Route path="*" render={props => (
        <Layout>
            <Main/>
        </Layout>
    )}/>
  </BrowserRouter>
);
