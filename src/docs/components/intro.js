import React from 'react';

import Switcher from './switcher';

class Intro extends React.Component {
  render() {
    const { brand, brands, onChangeBrand } = this.props;
    const height = window.innerHeight;
    const color = brand === 'white' ? 'black' : 'white';

    return (
      <div className={ `background-${brand}` } style={{ "height": height, "width":"100%", "position":"relative" }}>
        <div className={ `navbar navbar-fixed navbar-${brand}` }>
          <div className="container">
            <div className="navbar-title">
                <span className={ `text-${color}` }>psychic-ui</span>
            </div>
            <div className="nav">
                <div style={{ marginTop: '12.5px' }}>
                    <Switcher selected={ onChangeBrand } brands={ brands } brand={ brand }/>
                </div>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ "width":"100%", "position": "absolute", "top":"50%", "transform": "translateY(-50%)" }}>
          <h3 className="text-white">psychic-ui</h3>
          <br/>
          <img style={{ "width": "50px", "height":"50px", "borderRadius": "50px"}} src="assets/psychic-ui.png"/>
          <br/>
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
