import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './main.js';
import Layout from './layout.js';

export default (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="*" component={Main}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);
