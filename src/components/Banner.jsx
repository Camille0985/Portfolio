import React from "react";
import "../styles/Banner.scss";

function Banner({ bannerRef }) {


    return(
        <div className="banner" ref={bannerRef}>
            <div className="banner-content">
                <p>Bonjour, je suis Camille Duprez</p>
                <p>Bienvenue sur mon site !</p>
            </div>
        </div>
    )
};

export default Banner;