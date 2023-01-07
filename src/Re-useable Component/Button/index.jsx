import React from 'react';

const Button = (props) => {
  return (
    <button
      style={{ width: props.width, height: props.height }}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </button>
  );
};

export default Button;
