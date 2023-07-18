import React from 'react-router-dom';
import logo from '../assets/LOGO.png';
import logoMobile from '../assets/LOGO-mobile.png';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../style/Header.scss';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');
    const location = useLocation();
      
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };      
        handleResize();      
        window.addEventListener('resize', handleResize);      
        return () => {
            window.removeEventListener('resize', handleResize);
            setCurrentPath(location.pathname);
        }
    }, [location]);
    
    return(
        <header>
            <img src={isMobile ? logoMobile : logo} alt="Logo" className="logo"/>
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