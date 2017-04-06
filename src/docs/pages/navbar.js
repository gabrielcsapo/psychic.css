import React from 'react';
import Example from '../components/example';

class Navbar extends React.Component {
  render() {
    const { brand, alternate } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Navbar </h3>
          <div style={{ width: '50%', margin: '0 auto' }}>
            <Example summary={"Basic navbar"}>
                <div className={ `navbar navbar-${brand} text-${alternate}` }>
                  <div className="container">
                    <div className="navbar-title"><span>Title</span></div>
                  </div>
                </div>
            </Example>

            <Example summary={"Navbar with sub-navigation"}>
                <div className={ `navbar navbar-${brand} text-${alternate}` }>
                  <div className="container">
                    <div className="navbar-title"><span>Title</span></div>
                    <div className={ `nav text-${alternate}` }><a href="#blog">Blog</a><a href="#about">About</a><a href="#store">Store</a></div>
                  </div>
                </div>
            </Example>

            <Example summary={"Navbar with sub-navigation active"}>
                <div className={ `navbar navbar-${brand} text-${alternate}` }>
                  <div className="container">
                    <div className="navbar-title"><span>Title</span></div>
                    <div className={ `nav text-${alternate}` }><a className="active" href="#blog">Blog</a><a href="#about">About</a><a href="#store">Store</a></div>
                  </div>
                </div>
            </Example>

            <Example summary={"Navbar centered"}>
                <div className={ `navbar navbar-center navbar-${brand} text-${alternate}` }>
                  <div className="container">
                    <div className="navbar-title"><span>Title</span></div>
                    <div className={ `nav text-${alternate}` }><a href="#blog">Blog</a><a href="#about">About</a><a href="#store">Store</a></div>
                  </div>
                </div>
            </Example>

            <Example summary={"Navbar with border"}>
                <div style={{ backgroundColor: '#909090', width: '100%', height: '200px' }}>
                  <div className={ `navbar navbar-${brand} text-${alternate} border-${alternate}` }>
                    <div className="container">
                      <div className="navbar-title"><span>Title</span></div>
                      <div className={ `nav text-${alternate}` }><a href="#blog">Blog</a><a href="#about">About</a><a href="#store">Store</a></div>
                    </div>
                  </div>
                </div>
            </Example>

            <Example summary={"Navbar centered, with border"}>
                <div style={{ backgroundColor: '#909090', width: '100%', height: '200px' }}>
                  <div className={ `navbar navbar-center navbar-${brand} text-${alternate} border-${alternate}` }>
                    <div className="container">
                      <div className="navbar-title"><span>Title</span></div>
                      <div className={ `nav text-${alternate}` }><a href="#blog">Blog</a><a href="#about">About</a><a href="#store">Store</a></div>
                    </div>
                  </div>
                </div>
            </Example>

            <Example summary={"Navbar with select"}>
                <div className={ `navbar navbar-${brand} text-${alternate}` }>
                  <div className="container">
                    <div className="navbar-title"><span>Title</span></div>
                    <div className={ `nav text-${alternate}` }>
                        <a className="active" href="#blog">Blog</a>
                        <a href="#about">About</a>
                        <select>
                            <option value="default"> default </option>
                            <option value="primary"> primary </option>
                            <option value="success"> success </option>
                            <option value="info"> info </option>
                            <option value="warning"> warning </option>
                            <option value="danger"> danger </option>
                            <option value="white"> white </option>
                            <option value="black"> black </option>
                        </select>
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

export default Navbar;
