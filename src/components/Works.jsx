import React from 'react';
import data from '../data.json';

const Works = ({ selectedProjectIndex }) => {
  const selectedProject = data[selectedProjectIndex];

  return (
    <div className='works' id='Works'>
      {selectedProject && (
        <div className="work-container">
          <div className='work-title-links'>
            <h3>{selectedProject.title}</h3>
            <p>
              {selectedProject.link ? (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">Visiter le site</a>
              ) : (
                <span>Mise en ligne à venir</span>
              )} - <a href={selectedProject.git} target="_blank" rel="noopener noreferrer">Lien GitHub</a>
            </p>
          </div>
          <div className='work-info'>
            <div className='info'>
              <h4>Description</h4>
              <p>{selectedProject.description}</p>
            </div>
            <div className='info'>
              <h4>Difficultés rencontrées</h4>
              <p>{selectedProject.difficulties}</p>
            </div>
            <div className='info'>
              <h4>Solution</h4>
              <p>{selectedProject.solution}</p>
            </div>
            <div className='info'>
              <h4>Compétences acquises</h4>
              <p>{selectedProject.skills.join(', ')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
