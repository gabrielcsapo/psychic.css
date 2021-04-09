import React from 'react';
import Example from '../components/example';

const Grid = props => {
  const { brand } = props;
  const height = window.innerHeight;

  const styles = {
    cell: {
      color: 'white',
      border: '1px solid white',
      padding: '5px 0',
      textAlign: 'center',
      width: '100%'
    }
  }

  return (
    <section style={{ 'minHeight': height, position: "relative"}}>
      <div style={{padding: "50px"}}>

        <h3> Grid </h3>
        <div style={{  margin: '0 auto' }}>
          <div className="grid">
              <div className="col-0-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>0</div>
              </div>
              <div className="col-12-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>12</div>
              </div>
              <div className="col-1-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>1</div>
              </div>
              <div className="col-11-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>11</div>
              </div>
              <div className="col-2-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>2</div>
              </div>
              <div className="col-10-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>10</div>
              </div>
              <div className="col-3-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>3</div>
              </div>
              <div className="col-9-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>9</div>
              </div>
              <div className="col-4-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>4</div>
              </div>
              <div className="col-8-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>8</div>
              </div>
              <div className="col-5-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>5</div>
              </div>
              <div className="col-7-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>7</div>
              </div>
              <div className="col-6-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>6</div>
              </div>
              <div className="col-6-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>6</div>
              </div>
              <div className="col-7-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>7</div>
              </div>
              <div className="col-5-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>5</div>
              </div>
              <div className="col-8-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>8</div>
              </div>
              <div className="col-4-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>4</div>
              </div>
              <div className="col-9-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>9</div>
              </div>
              <div className="col-3-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>3</div>
              </div>
              <div className="col-10-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>10</div>
              </div>
              <div className="col-2-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>2</div>
              </div>
              <div className="col-11-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>11</div>
              </div>
              <div className="col-1-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>1</div>
              </div>
              <div className="col-12-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>12</div>
              </div>
              <div className="col-0-12">
                  <div className={ `background-${brand}` } style={ styles.cell }>0</div>
              </div>
          </div>
          <br/>
          <Example>
            <div className="grid">
              <div className="col-${column}-12"></div>
            </div>
          </Example>
          <blockquote>
              <span>the grid also has breakpoint options for</span>

              <pre><code>(xs, sm, md, lg, xl)</code></pre>
              <br/>
              <span>using these options can be done as follows</span>

              <pre><code>col-|size|-|column|-|width|</code></pre>
          </blockquote>
        </div>

      </div>
    </section>
  );
};

export default Grid;
