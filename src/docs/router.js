import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Main from './main.js';
import Layout from './layout.js';

export default (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="*" component={Main} />
    </Route>
  </Router>
);
