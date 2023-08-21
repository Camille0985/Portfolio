import React from "react";
import "../styles/About.scss";

function About() {


    return(
        <div id="About">
            <div className="about_container">
                <h2>À Propos</h2>
                <p className="about_me">Passionnée d'informatique dès mon plus jeune âge, j'ai par la suite découvert l'univers du web.</p>
                <p className="about_me">
                    Après des études en marketing, j'ai écouté ma véritable passion pour me former au développement web. 
                    Mon intérêt pour les jeux vidéos m'a également conduite à explorer la programmation de jeux.
                </p>
                <p className="about_me">Je souhaite maintenant poursuivre cette belle aventure de découverte et d'apprentissage dans le développement.</p>
            </div>
        </div>
    )
};

export default About;