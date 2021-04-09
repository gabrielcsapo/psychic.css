import React from 'react';

const Colors = props => {
  const { brands } = props;

  const height = window.innerHeight;
  const width = window.innerWidth;
  const radius = (width / brands.length) - 50;

  const style = {
    circle: {
      borderRadius: "50%",
      width: `${radius > 0 ? radius : 100}px`,
      height: `${radius > 0 ? radius : 100}px`,
      textAlign: "center",
      lineHeight: `${radius > 0 ? radius : 100}px`,
      display: "inline-block",
      margin: '10px'
    }
  };

  return (
    <section style={{ 'minHeight': height, position: "relative"}}>
      <div style={{padding: "50px"}}>
        <h3> Colors </h3>
        <div style={{"position": "absolute", "top":"50%", "transform": "translateY(-50%)"}}>
          { brands.map((brand) => {
            return (<div className={ `background-${brand}` } style={ style.circle }>
              <span className={ brand !== 'white' ? 'text-white' : 'text-black' }> {brand} </span>
            </div>)
          })}
        </div>
      </div>
    </section>
  );
};

export default Colors;
