import React from 'react';
import ReactDOMServer from 'react-dom/server';

const beautify_html = require('js-beautify').html;

class Example extends React.Component {
  componentDidMount() {
    PR.prettyPrint();
  }

  render() {
    const { children, summary } = this.props;
    const escape = (h) => beautify_html(h).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/ /g, '&nbsp;');
    const content = escape(ReactDOMServer.renderToStaticMarkup(children));

    return (
      <div>
        <br/>
        <small style={{ "display": "block", "paddingBottom": "10px", "marginBottom": "5px" }}>{ summary ? summary : ''}</small>
        { children }
        <br/>
        <pre style={{ 'white-space': 'pre-line' }} className="border-primary prettyprint lang-html" dangerouslySetInnerHTML={{ __html: content }} />
        <br/>
      </div>
    );
  }
}

export default Example;
