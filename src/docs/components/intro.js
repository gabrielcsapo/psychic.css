import React from 'react';

import pkg from '../../../package.json';
import Switcher from './switcher';

class Intro extends React.Component {
  render() {
    const { brand, brands, alternate, onChangeBrand } = this.props;
    const height = window.innerHeight;

    return (
      <div className={ `background-${brand} text-${alternate}` } style={{ "height": height, "width":"100%", "position":"relative" }}>
        <div className={ `navbar navbar-${brand} navbar-fixed text-${alternate}` }>
          <div className="container">
            <div className="navbar-title"><span>psychic.css</span></div>
            <div className={ `nav text-${alternate}` }>
                <Switcher selected={ onChangeBrand } alternate={ alternate } brands={ brands } brand={ brand }/>
                <p style={{ marginLeft: "20px", marginRight: "5px" }}>|</p>
                <a href="https://github.com/gabrielcsapo/psychic.css"> Source </a>
            </div>
          </div>
        </div>
        <div className="text-center" style={{ "width":"100%", "position": "absolute", "top":"50%", "transform": "translateY(-50%)" }}>
          <h3> {pkg.name} </h3>
          <small>{pkg.description}</small>
          <br/>
          <br/>
          <table className={ `table` } style={{ margin: "0 auto" }}>
            <thead>
              <tr>
                <th>type</th>
                <th>size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>gzipped</td>
                <td>5.0K</td>
              </tr>
              <tr>
                <td>minified</td>
                <td>28K</td>
              </tr>
              <tr>
                <td>unminified</td>
                <td>35K</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="navbar navbar-center" style={{ "bottom":"0", "position":"absolute" }}>
          <div className="container text-center">
            <div>created with ♥ by <a className={`text-${alternate}`} href="http://gabrielcsapo.com">@gabrielcsapo</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
