import React from 'react';

import './style.css';
import '../../dist/psychic.min.css';
import 'code-prettify/src/prettify.js';

class Layout extends React.Component {
  render () {
    const { children } = this.props;

    return (
       <div>
        { children }
       </div>
    );
  }
}

export default Layout;
