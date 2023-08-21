import React from 'react';
import data from '../data.json';
import "../styles/Works.scss";

const Works = () => {
  return (
    <div className='works' id='Works'>
      <h2>Mes projets</h2>
      {data.map((i, index) => (
        <div key={index} className="work-container">
          <div className='work-img-container'>
            <img src={i.cover} alt={i.title} className='work-img'/>
          </div>
          <div className='work-info'>
            <h3>{i.title}</h3>
            <p>Description : {i.description}</p>
            <p>Difficultés rencontrées : {i.difficulties}</p>
            <p>Solution : {i.solution}</p>
            <p>Compétences acquises : {i.skills.join(', ')}</p>
            { i.link && <a href={i.link} target="_blank" rel="noopener noreferrer">Voir le projet</a> }
            <br />
            <a href={i.git} target="_blank" rel="noopener noreferrer">Lien GitHub</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
