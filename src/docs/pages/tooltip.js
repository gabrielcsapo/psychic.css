import React from 'react';
import Example from '../components/example';

class Tooltip extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Tooltip </h3>
          <div style={{ width: '50%', margin: '0 auto' }}>

            <Example summary={"Tooltip basic directions"}>
                <div>
                    <span className="tooltip-top" data-tooltip="I’m the tooltip text.">Tooltip Top</span>
                    <br/>
                    <span className="tooltip-right" data-tooltip="I’m the tooltip text.">Tooltip Right</span>
                    <br/>
                    <span className="tooltip-bottom" data-tooltip="I’m the tooltip text.">Tooltip Bottom</span>
                    <br/>
                    <span className="tooltip-left" data-tooltip="I’m the tooltip text.">Tooltip Left</span>
                </div>
            </Example>

            <Example summary={"Tooltip in a sentence"}>
                <div>
                    The cow jumped over <span className="tooltip-top" data-tooltip="Moon! 🌙">the</span>
                </div>
            </Example>

            <Example summary={"Tooltip that accomodates large amounts of text"}>
                <span className="tooltip-top" data-tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet diam sit amet eros bibendum, vel imperdiet eros pellentesque. Vivamus lacinia erat purus. Duis ullamcorper, elit ut porta finibus, orci justo lacinia augue, at lobortis tortor arcu ac ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sapien neque, non maximus urna faucibus et. Fusce odio erat, ultrices vitae vehicula non, molestie a lorem. Proin vitae leo consequat, lobortis est sed, fringilla odio. Quisque nisl lorem, feugiat suscipit sodales at, sagittis sit amet quam.">More info</span>
            </Example>

          </div>

        </div>
      </section>
    );
  }
}

export default Tooltip;
