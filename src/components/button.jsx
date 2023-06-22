import React from 'react';

const Button = ({ color, children, disabled, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
