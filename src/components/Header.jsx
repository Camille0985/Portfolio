import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import logoMobile from '../assets/LOGO-mobile.png';
import { Link } from 'react-router-dom';
import '../style/Header.scss';

function Header() {
    const [currentPath, setCurrentPath] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
      }, [location]);
    
    return(
        <header>
            <img src={logo} alt="Logo" className="logo"/>
            <img src={logoMobile} alt="Logo" className="logoMobile"/>
            <nav>
                <ul>
                    <li><Link to='/' className={currentPath === '/' ? 'active' : ''}>Accueil</Link></li>
                    <li><Link to='/About' className={currentPath === '/About' ? 'active' : ''}>A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;