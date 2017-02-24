import React from 'react';

class Switcher extends React.Component {
  changeBrand(e) {
    this.props.selected(e.target.value);
  }
  render() {
    const { brands, brand } = this.props;

    return (
        <select style={{'display': 'inline-block' }} onChange={this.changeBrand.bind(this)}>
          { brands.map((b) => {
            if(brand == b) {
                return <option value={b} selected> {b} </option>
            } else {
              return <option value={b}> {b} </option>
            }
          })}
        </select>
    );
  }
}

export default Switcher;
