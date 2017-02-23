import React from 'react';
import Example from '../components/example';

class Examples extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Example </h3>
          <div style={{ width: '50%', margin: '0 auto' }}>

            <Example summary={"A status page! A copy of the travis one!"}>
              <div>
                <div style={{"position":"relative","overflow":"hidden"}}>
                    <div className="panel">
                        <div className="panel-body" style={{padding: 0}}>
                          <img className="responsive" src="/assets/travis.jpeg"/>
                        </div>
                        <div className="panel-footer" style={{"clear": "both", "display": "table", "width": "100%", "padding": "0px"}}>
                          <h3 style={{"float":"left", "paddingLeft": "10px"}}>Travis CI</h3>
                          <button className="btn btn-primary" style={{"float":"right"}}>Subscribe to Updates</button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <ul className="list">
                    <li className="list-item list-item-success">
                        <div className="list-item-left">All Systems Operational</div>
                        <div className="list-item-right"><small>Refreshed 45 minutes ago</small></div>
                    </li>
                </ul>
                <br/>
                <br/>
                <ul className="list">
                    <li className="list-item">
                        <div className="list-item-left">API</div>
                        <div className="list-item-right"><small className="text-success">Operational</small></div>
                    </li>
                    <li className="list-item">
                        <div className="list-item-left">Web App</div>
                        <div className="list-item-right"><small className="text-success">Operational</small></div>
                    </li>
                </ul>
              </div>
            </Example>

            <Example summary={"A cover page!"}>
              <div className={ `background-${brand}` } style={{"height":"500px","width":"100%", "position":"relative"}}>
                  <div className="navbar navbar-center">
                      <div className="container">
                          <div className="navbar-title"><span className="text-white">Cover</span></div>
                          <div className="nav">
                            <a className="text-white" href="#home" id="home">Home</a>
                            <a className="text-white" href="#blog" id="blog">Blog</a>
                            <a className="text-white" href="#contact" id="contact">Contact</a>
                          </div>
                      </div>
                  </div>
                  <div className="text-center" style={{"width":"100%","position":"absolute","top":"50%","transform":"translateY(-50%)"}}>
                      <h3 className="text-white">Hello</h3>
                      <div className="text-white">This is a cover template for psychic-ui</div>
                      <br/>
                      <small className="text-white">Enjoy!</small>
                  </div>
                  <div className="navbar navbar-center" style={{"bottom":"0","position":"absolute"}}>
                      <div className="container text-center">
                          <div className="text-white">Made with 🐒 by @gabrielcsapo</div>
                      </div>
                  </div>
              </div>
            </Example>

          </div>

        </div>
      </section>
    );
  }
}

export default Examples;
