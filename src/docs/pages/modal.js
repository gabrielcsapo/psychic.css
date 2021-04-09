import React from 'react';
import Example from '../components/example';

const Modal = props => {
  const { brand } = props;
  const height = window.innerHeight;

  return (
    <section style={{ 'minHeight': height, position: "relative"}}>
      <div style={{padding: "50px"}}>

        <h3> Modal </h3>
        <div style={{  margin: '0 auto' }}>

          <Example summary={"Open a modal with a button click"}>
              <div>
                  <button className={ `btn btn-${brand}` } onClick={ () => { location.href='#modal'; }}>modal</button>
                  <div className={ `modal modal-${brand}` } id="modal">
                    <div>
                      <a className="modal-close" href="#close" title="Close">X</a>
                      <h1>Hello</h1>
                      <hr/>
                      <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed enim vel arcu finibus vehicula a vel nisi. Maecenas a ligula et ipsum consequat hendrerit id ac nibh. Donec vel augue dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                    </div>
                  </div>
              </div>
          </Example>

          <Example summary={"Modal absolutely positioned"}>
              <div className={ `background-${brand}` } style={{ "position": "relative", "width": "100%", "height":"500px" }}>
                <div className={ `modal modal-${brand} modal-active modal-absolute` }>
                  <div>
                    <a className="modal-close" href="#close" title="Close">X</a>
                    <h1>Hello</h1>
                    <hr/>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed enim vel arcu finibus vehicula a vel nisi. Maecenas a ligula et ipsum consequat hendrerit id ac nibh. Donec vel augue dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                  </div>
                </div>
              </div>
          </Example>

        </div>

      </div>
    </section>
  );
};

export default Modal;
