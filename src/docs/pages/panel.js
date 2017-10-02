import React from 'react';
import Example from '../components/example';

class Panel extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Panel </h3>
          <div style={{ width: '50%', margin: '0 auto' }}>
            <Example summary={"Basic panel definition"}>
                <div className={ `panel panel-${brand}` }>
                    <div className="panel-heading">Panel heading</div>
                    <div className="panel-body">
                      Panel content
                    </div>
                    <div className="panel-footer">Panel footer</div>
                </div>
            </Example>

            <br/>

            <Example summary={"Panel with table in body"}>
                <div className={ `panel panel-${brand}` }>
                    <div className="panel-heading">Panel heading</div>
                    <div className="panel-body">
                        Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </div>
                    <table className={ `table table-${brand} responsive` }>
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John</td>
                          <td>Doe</td>
                        </tr>
                        <tr>
                          <td>Jane</td>
                          <td>Doe</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </Example>
          </div>

        </div>
      </section>
    );
  }
}

export default Panel;
