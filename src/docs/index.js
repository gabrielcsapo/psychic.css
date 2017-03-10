import { render } from 'react-dom';
import React from 'react';

import Main from './main.js';
import Layout from './layout.js';

const mountNode = document.querySelector('#root');

render(<Layout>
  <Main/>
</Layout>, mountNode);
