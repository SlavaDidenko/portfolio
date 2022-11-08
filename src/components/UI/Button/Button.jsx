import React from 'react';
import './Button.scss'
const Button = ({children}) => {
  return (
    <button className='wow animate__animated animate__slideInUp btn'>
      <span>{children}</span>
    </button>
  );
};

export default Button;
