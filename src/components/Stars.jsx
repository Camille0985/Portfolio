import React from 'react';
import starActive from '../assets/star.png';
import starInactive from '../assets/star-inactive.png';

function Stars({ rating }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className='stars'>
      {range.map((star, index) => (
        <img key={index} src={rating >= star ? starActive : starInactive} alt={`star-${star}`} />
      ))}
    </div>
  );
}

export default Stars;