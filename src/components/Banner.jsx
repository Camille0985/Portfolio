import React from 'react';
import '../style/Banner.scss';
import homeBanner from '../assets/Home-banner.png';
import aboutBanner from '../assets/About-banner.png';

function Banner({ page }) {
    const bannerImage = page === 'home' ? homeBanner : aboutBanner;
    const altText = page === 'home' ? 'Montagnes' : 'Montagnes enneigées';
    const title = page === 'home' ? 'Chez vous, partout ailleurs' : '';
  
    return (
      <div className="banner-container">
      <div className="banner">
        <div className="imageContainer">
          <img src={bannerImage} alt={altText} className="bannerImg" />
        </div>
      </div>
      <div className='title'>
        {title}
      </div>
    </div>
    );
  }

export default Banner;