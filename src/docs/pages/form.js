import React from 'react';
import Example from '../components/example';

class Form extends React.Component {
  render() {
    const { brand } = this.props;
    const height = window.innerHeight;

    return (
      <section style={{ 'minHeight': height, position: "relative"}}>
        <div style={{padding: "50px"}}>

          <h3> Form </h3>
          <div style={{ width: '50%', margin: '0 auto' }}>

            <Example summary={"Text input"}>
                <input className={ `input-${brand}` } type="text" placeholder="input"/>
            </Example>

            <Example summary={"Password input"}>
                <input className={ `input-${brand}` } type="password" placeholder="password"/>
            </Example>

            <Example summary={"Number input"}>
                <input className={ `input-${brand}` } type="number" value={0} placeholder="0"/>
            </Example>

            <Example summary={"Textarea"}>
                <textarea className={ `input-${brand}` } placeholder="this is a textarea"></textarea>
            </Example>

            <Example summary={"Select"}>
              <select className={ `input-${brand}` }>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </Example>

            <Example summary={"Button group"}>
                <div className="btn-group">
                  <button className={ `btn btn-${brand}` }>{brand}</button>
                  <button className={ `btn btn-${brand}` }>{brand}</button>
                  <button className={ `btn btn-${brand}` }>{brand}</button>
                </div>
            </Example>

            <Example summary={"Basic button"}>
                <p className={ `background-${brand}` }>
                  <button className={ `btn` }>{brand}</button>
                </p>
            </Example>

            <Example summary={"Button with styling"}>
                <button className={ `btn btn-${brand}` }>{brand}</button>
            </Example>

            <Example summary={"Button with spinner"}>
                <button className={ `btn btn-${brand}` }>
                    <div className={ `spinner spinner-white` }></div>
                </button>
            </Example>

            <Example summary={"Button with border styling"}>
                <button className={ `btn border-${brand}` }>
                    <div className={ `spinner spinner-${brand}` }></div>
                </button>
            </Example>

            <Example summary={"Block level button"}>
                <button className={ `btn btn-block border-${brand}` }>
                    <div className={ `spinner spinner-${brand}` }></div>
                </button>
            </Example>

          </div>

        </div>
      </section>
    );
  }
}

export default Form;
