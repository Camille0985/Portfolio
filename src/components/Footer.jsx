import React from 'react';

const Footer = () => {

    const handleClick = () => {
        window.open("https://github.com/Camille0985", "_blank");
    };

    return (
        <footer id="Footer">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo" onClick={handleClick} className="logo-git"/>
            <a href="mailto:duprez_camille@yahoo.com" className='contact' id='Contact'>
                Me contacter par mail
            </a>
        </footer>
    )
}

export default Footer;