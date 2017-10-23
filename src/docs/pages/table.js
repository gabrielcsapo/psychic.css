import React from 'react';
import Example from '../components/example';

class Table extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Table </h3>
          <div style={{  margin: '0 auto' }}>
            <Example>
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
                  <tfoot>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
            </Example>
          </div>

        </div>
      </section>
    );
  }
}

export default Table;
