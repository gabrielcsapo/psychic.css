import React from 'react';
import Example from '../components/example';

class Alert extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Alert </h3>
          <div style={{ width: '50%', margin: '0 auto' }}>

            <Example summary={"Basic alert"}>
                <div className={ `alert alert-${brand}` }>
                    <div>I am an alert</div>
                    <div className="alert-close">×</div>
                </div>
            </Example>

            <Example summary={"Alert with a lot of content"}>
                <div className={ `alert alert-${brand}` }>
                    <div>
                      This is an alert with a lot of content
                      <br/>
                      <br/>
                      <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor augue erat, sed condimentum neque euismod quis. Maecenas accumsan eget dolor ut convallis. Curabitur erat mi, rutrum a magna vitae, eleifend lacinia est. Phasellus elementum sem et diam scelerisque, sit amet rhoncus tellus suscipit. Integer commodo scelerisque ultricies. Fusce sit amet eros feugiat, congue dui a, ultricies felis. Cras non iaculis augue, eget egestas tortor. Vestibulum a consectetur orci, quis tempus nisi. Ut ut porta mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac arcu vel odio accumsan tristique vel volutpat augue. Proin euismod nunc quis molestie tempor. Ut ornare luctus risus a pretium.
                      </blockquote>
                    </div>
                    <div className="alert-close">×</div>
                </div>
            </Example>

          </div>

        </div>
      </section>
    );
  }
}

export default Alert;
