import React from 'react';

class Switcher extends React.Component {
  changeBrand(e) {
    this.props.selected(e.target.value);
  }

  render() {
    const { brands, brand, alternate} = this.props;
    const options = brands.map((b, i) => {
      if(brand == b) {
          return <option value={b} selected> {b} </option>
      } else {
        return <option value={b}> {b} </option>
      }
    });

    return (
        <select className={`border-${alternate} text-${alternate}`} style={{'display': 'inline-block' }} onChange={this.changeBrand.bind(this)}>
          { options }
        </select>
    );
  }
}

export default Switcher;
