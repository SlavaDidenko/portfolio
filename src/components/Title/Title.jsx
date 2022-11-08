import React from 'react';
import './Title.scss';
// import ReactWOW from 'react-wow'
const Title = ({ title, subtitle }) => {
  return (
      <div className="wow animate__animated animate__fadeInUp wrapper-title">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
  );
};

export default Title;
