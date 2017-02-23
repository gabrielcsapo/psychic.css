import React from 'react';
import Example from '../components/example';

class Badge extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Badge </h3>
          <div style={{ width: '50%', margin: '0 auto' }}>

            <Example summary={"Basic badge"}>
                <div className={ `badge badge-${brand}` }>{brand}</div>
            </Example>

            <Example summary={"Badge with only outline"}>
                <div className={ `badge border-${brand}` }>{brand}</div>
            </Example>

          </div>

        </div>
      </section>
    );
  }
}

export default Badge;
