import React from 'react';

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white'
    }
    const height = window.innerHeight - 25; // remove 25 to accomodate for padding
    window.addEventListener('scroll', function() {
      const y = window.scrollY;
      let color = '';
      if(y < height) {
        color = 'white';
      } else {
        color = '#655d5d';
      }
      if(color !== this.state.color) {
        this.setState({ color });
      }
    }.bind(this));
  }
  changeBrand(e) {
    this.setState({
      brand: e.target.value
    });
    this.props.selected(e.target.value);
  }
  render() {
    const { brands, brand } = this.props;
    const { color } = this.state;
    const style = {
      'color': color,
      'zIndex': '1000',
      'width': 'auto',
      'position': 'fixed',
      'top': '15px',
      'right': '20px'
    };

    return (
      <div style={ style }>
        Change Style &nbsp;
        <select style={{ 'display': 'inline-block' }} onChange={this.changeBrand.bind(this)}>
          { brands.map((b) => {
            if(brand == b) {
                return <option value={b} selected> {b} </option>
            } else {
              return <option value={b}> {b} </option>
            }
          })}
        </select>
      </div>
    );
  }
}

export default Switcher;
