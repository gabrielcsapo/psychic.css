import { render } from 'react-dom';

import routes from './router';

const mountNode = document.querySelector('#root');

render(routes, mountNode);
