import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import data from '../data.json';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import '../style/Lodging.scss';

function Lodging() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { id } = useParams();
  const lodging = data.find((item) => item.id === id);
  const navigate = useNavigate();
  
  if (!lodging) {
    navigate('/error');
    return null;
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? lodging.pictures.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === lodging.pictures.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className='lodging'>
      <Header />
      <div>
        <div>
          <img src={lodging.pictures[currentImageIndex]} alt={lodging.title} className='img-carousel'/>
          <button onClick={goToPreviousImage} className='btn-carousel'>P</button>
          <button onClick={goToNextImage} className='btn-carousel'>S</button>
        </div>
        <div className='lodging-container'>
          <div className='infos-title'>
            <p className='lodging-name'>{lodging.title}</p>
            <p className='lodging-location'>{lodging.location}</p>
            <ul className='li-lodging'>
              {lodging.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className='infos-host'>
            <div className='host'>
              <p>{lodging.host.name}</p>
              <img src={lodging.host.picture} alt="avatar" />
            </div>
            <p>{lodging.rating}</p>
          </div>
        </div>
      </div>
      <Collapse title="Description" values={lodging.description} />
      <Collapse title="Équipements" values={lodging.equipments} />
      <Footer />
    </div>
  );
}

export default Lodging;