import React, { useState } from 'react';
import data from '../data.json';
import Works from './Works';

function Gallery() {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  return (
    <section id='Gallery'>
      <div className='gallery-container'>
        <h2>Mes projets</h2>
        <div className="gallery-blocks-container">
          {data.map((project, index) => (
            <div key={index} className='gallery-block' onMouseEnter={() => setHoveredBlock(index)} onMouseLeave={() => setHoveredBlock(null)}>
              <img src={project.cover} alt={project.title} className='gallery-img' />
              {hoveredBlock === index && (
                <div className='project-details'>
                  <Works selectedProjectIndex={hoveredBlock} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
