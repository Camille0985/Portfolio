import React from "react";

function Banner({ bannerRef }) {


    return(
        <div id="banner" ref={bannerRef}>
            <div className="banner-content">
                <p>Bonjour, je suis Camille Duprez, bienvenue sur mon site !</p>
            </div>
        </div>
    )
};

export default Banner;