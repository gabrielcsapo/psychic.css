import React from 'react';
import Example from '../components/example';

const List = props => {
  const { brand } = props;
  const height = window.innerHeight;

  return (
    <section style={{ 'minHeight': height, position: "relative"}}>
      <div style={{padding: "50px"}}>

        <h3> List </h3>
        <div style={{  margin: '0 auto' }}>

          <Example summary={"Basic list"}>
              <ul className="list">
                <li className="list-item">Item 1</li>
                <li className="list-item">Item 2</li>
              </ul>
          </Example>

          <Example summary={"Basic list colored"}>
              <ul className="list">
                <li className="list-item">Item 1</li>
                <li className={`list-item list-item-${brand}`}>Item 2</li>
                <li className="list-item">Item 3</li>
                <li className={`list-item list-item-${brand}`}>Item 4</li>
              </ul>
          </Example>

          <Example summary={"List with badges"}>
              <ul className="list">
                <li className="list-item">Item 1
                  <div className={ `badge badge-${brand}` }>14</div>
                </li>
                <li className="list-item">Item 2
                  <div className={ `badge badge-${brand}` }>3</div>
                </li>
              </ul>
          </Example>

          <Example summary={"List with left and right positioned items"}>
              <ul className="list">
                <li className="list-item">
                  <div className="list-item-left">Left</div>
                  <div className="list-item-right">Right</div>
                </li>
              </ul>
          </Example>

        </div>

      </div>
    </section>
  );
};

export default List;
