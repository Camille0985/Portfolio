import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import '../style/Error.scss';

function Error() {

  return (
    <div>
      <Header />
      <div className='error'>
        <span>404</span>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={'/'} className='redirect'>Retourner sur la page d'accueil</Link>
      </div>
    </div>
      
  );
}

export default Error;