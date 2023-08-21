import React from 'react';
import "../styles/Footer.scss"

const Footer = () => {

    const handleClick = () => {
        window.open("https://github.com/Camille0985", "_blank");
    };

    return (
        <div className='footer'>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo" onClick={handleClick} className="logo-git"/>
            <p className='contact' id='Contact'>
                Duprez_camille@yahoo.com
            </p>
        </div>
    )
}

export default Footer;