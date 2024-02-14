import React from 'react';

const Box = ({id}) => {
  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor:'#ff3432',
    margin: '10px',
    display: 'inline-block',
    fontweight:'900',
  };

  return <div style={boxStyle}>{id}</div>;
};

export default Box;