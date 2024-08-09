/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/Circle.scss';

const Circle = ({ text }) => {
  return (
    <div className="circular-text-container">
      <svg viewBox="0 0 100 100" className="circular-text-svg">
        <path
          id="circlePath"
          d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          fill="nONE" 
        />
        <text className='circular-text'>
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Circle;
