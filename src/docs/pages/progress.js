import React, { Component } from 'react';
import Example from '../components/example';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
        progressAmount: 0
    }
    setInterval(() => {
        let progressAmount = this.state.progressAmount;
        if(progressAmount == 99) {
            progressAmount = 0;
        }
        progressAmount += 1;

        this.setState({
            progressAmount
        });
    }, 100);
  }
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;
    const { progressAmount } = this.state;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Progress </h3>
          <div style={{  margin: '0 auto' }}>

            <Example summary={"Progress bar that half-way filled"}>
                <div className="progress">
                    <div className={ `progress-fill progress-fill-${brand}` } style={{"width": "50%"}}></div>
                </div>
            </Example>

            <Example summary={"Progress bar that is being filled"}>
                <div className="progress">
                    <div className={ `progress-fill progress-fill-${brand}` } style={{"width": `${progressAmount}%`}}></div>
                </div>
            </Example>

            <Example summary={"Progress bar that is being filled"}>
                <div className="progress">
                    <div className={ `progress-fill progress-fill-${brand}` } style={{"width": `${progressAmount}%`}}>
                        {progressAmount}%
                    </div>
                </div>
            </Example>

          </div>

        </div>
      </section>
    );
  }
}

export default Progress;
