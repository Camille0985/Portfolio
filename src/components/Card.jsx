import React from 'react';
import Tags from './Tags';
import Collapse from './Collapse';
import Stars from './Stars';
import '../style/Card.scss';

const Card = ({ lodging }) => {
    const title = lodging.title;
    const location = lodging.location;
    const name = lodging.host.name;
    const avatar = lodging.host.picture;

  return (
    <div className='card-container'>
        <div className='card'>
          <div className='infos-title'>
            <h1>{title}</h1>
            <p>{location}</p>
            <Tags lodging={lodging} />
          </div>
          <div className='host-infos'>
            <div className='host'>
              <p>{name}</p>
              <img src={avatar} alt="avatar" />
            </div>
            <Stars rating={lodging.rating}/>
          </div>
        </div>
        <div className='card-collapse-container'>
          <Collapse title="Description" values={lodging.description} className='collapse'/>
          <Collapse title="Équipements" values={lodging.equipments} className='collapse'/>
        </div>
    </div>
  );
};

export default Card;

