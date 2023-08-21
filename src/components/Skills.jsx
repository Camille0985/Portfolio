import React from 'react';
import '../styles/Skills.scss';

function Skills() {

  return (
    <div className='skills' id='Skills'>
      <div className='Front skills-li'>
        <span>Front-End</span>
        <div className='ul-container'>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
          </ul>
        </div>
      </div>
      <div className='Back skills-li'>
        <span>Back-End</span>
        <div className='ul-container'>
          <ul>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>Bases MongoDB</li>
          </ul>
        </div>
      </div>
      <div className='Tools skills-li'>
        <span>Outils</span>
        <div className='ul-container'>
          <ul>
            <li>VSCode/Github</li>
            <li>Postman</li>
            <li>Bases MongoDB Atlas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;