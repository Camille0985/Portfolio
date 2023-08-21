import React from 'react';
import "../styles/Footer.scss"

const Footer = () => {

    const handleClick = () => {
        window.open("https://github.com/Camille0985", "_blank");
    };

    return (
        <div className='footer'>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo" onClick={handleClick} className="logo-git"/>
            <a href="mailto:duprez_camille@yahoo.com" className='contact' id='Contact'>
                duprez_camille@yahoo.com
            </a>
        </div>
    )
}

export default Footer;