import React from "react";
import "../styles/Header.scss"

function Header({ isOnBanner }) {
    
    const handleClick = () => {
        window.open("https://github.com/Camille0985", "_blank");
    };

    return(
        <header className={`main-header ${isOnBanner ? 'white-text' : 'green-text'}`} id="header">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo" onClick={handleClick} className="logo-git"/>
                <nav>
                    <ul>
                        <li><a href="#About">Présentation</a></li>
                        <li><a href="#Skills">Compétences</a></li>
                        <li><a href="#Works">Projets</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
        </header>
    )
};

export default Header;