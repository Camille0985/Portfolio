import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import data from '../data.json';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import '../style/Lodging.scss';

function checkValidity(id) {
  return data.some((item) => item.id === id);
}

function Lodging() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lodging = data.find((item) => item.id === id);

  useEffect(() => {
    const isIdValid = checkValidity(id);

    if (!isIdValid) {
      navigate('/error');
    }
  }, [id, navigate]);

  if (!lodging) {
    return null;
  }

  return (
    <div className='lodging'>
      <Header />
      <Carousel img={lodging.pictures} />
      <Card lodging={lodging} />
    </div>
  );
}

export default Lodging;