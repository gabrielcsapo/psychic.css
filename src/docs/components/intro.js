import React from 'react';

class Intro extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <div className={ `background-${brand}` } style={{ "height": height,"width":"100%", "position":"relative" }}>
        <div className="navbar navbar-center">
          <div className="container">
            <div className="navbar-title"><span className="text-white">psychic-ui</span></div>
            <div className="navbar-content"></div>
          </div>
        </div>
        <div className="text-center" style={{ "width":"100%", "position": "absolute", "top":"50%", "transform": "translateY(-50%)" }}>
          <h3 className="text-white">psychic-ui</h3>
          <br/>
          <div className="text-white">Lightweight and easy to use</div>
          <br/>
          <small className="text-white">A nuts and bolts approach to styling the web</small>
        </div>
        <div className="navbar navbar-center" style={{ "bottom":"0", "position":"absolute" }}>
          <div className="container text-center">
            <div className="text-white">created with ♥ by <a className="text-white" href="http://gabrielcsapo.com">@gabrielcsapo</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
