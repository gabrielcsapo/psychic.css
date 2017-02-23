import React from 'react';
import Example from '../components/example';

class Navbar extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Navbar </h3>
          <div style={{ width: '50%', margin: '0 auto' }}>
            <Example summary={"Basic navbar"}>
                <div className={ `navbar navbar-${brand}` }>
                  <div className="container">
                    <div className="navbar-title"><span>Title</span></div>
                  </div>
                </div>
            </Example>

            <Example summary={"Navbar with sub-navigation"}>
                <div className={ `navbar navbar-${brand}` }>
                  <div className="container">
                    <div className="navbar-title"><span>Title</span></div>
                    <div className="nav"><a href="#blog">Blog</a><a href="#about">About</a><a href="#store">Store</a></div>
                  </div>
                </div>
            </Example>

            <Example summary={"Navbar with sub-navigation active"}>
                <div className={ `navbar navbar-${brand}` }>
                  <div className="container">
                    <div className="navbar-title"><span>Title</span></div>
                    <div className="nav"><a className="active" href="#blog">Blog</a><a href="#about">About</a><a href="#store">Store</a></div>
                  </div>
                </div>
            </Example>

            <Example summary={"Navbar centered"}>
                <div className={ `navbar navbar-center navbar-${brand}` }>
                  <div className="container">
                    <div className="navbar-title"><span>Title</span></div>
                    <div className="nav"><a href="#blog">Blog</a><a href="#about">About</a><a href="#store">Store</a></div>
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
