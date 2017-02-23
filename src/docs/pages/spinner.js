import React from 'react';
import Example from '../components/example';

class Spinner extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Spinner </h3>
          <div style={{ width: '50%', margin: '0 auto' }}>
            <Example summary={"Spinner that is spinning"}>
              <div className="spinner-overlay">
                <div className={`spinner spinner-${brand}`}></div>
              </div>
            </Example>

            <br/>

            <Example summary={"Spinner that has finished spinning"}>
              <div className="spinner-overlay">
                <div className={`spinner spinner-${brand} spinner-done`}></div>
              </div>
            </Example>

            <br/>

            <Example summary={"Spinner positioned absolutely"}>
              <div className="spinner-overlay">
                <div className="spinner-wrapper">
                  <div className={`spinner spinner-${brand}`}></div>
                </div>
              </div>
            </Example>
          </div>

        </div>
      </section>
    );
  }
}

export default Spinner;
