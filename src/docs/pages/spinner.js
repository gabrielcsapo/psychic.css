import React from 'react';
import Example from '../components/example';

const Spinner = props => {
  const { brand, alternate } = props;
  const height = window.innerHeight;

  return (
    <section style={{ 'minHeight': height, position: "relative"}}>
      <div style={{padding: "50px"}}>

        <h3> Spinner </h3>
        <div style={{  margin: '0 auto' }}>
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
            <div className={ `spinner-overlay background-${alternate}` } style={{ padding: '10px 0px 10px 0px' }}>
              <div className="spinner-wrapper">
                <div className={`spinner spinner-${brand}`}></div>
              </div>
            </div>
          </Example>
        </div>

      </div>
    </section>
  );
};

export default Spinner;
