import React from 'react';
import '../style/Tags.scss'

const Tags = ({ lodging }) => {
    const tags = lodging.tags;

  return (
    <div className='tags'>
            <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
    </div>
  );
};

export default Tags;