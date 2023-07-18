import React from 'react';
import logoFooter from '../assets/LOGO-Footer.png';
import '../style/Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logoFooter} alt="Logo" className="logo"/>
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer;