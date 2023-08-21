import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import data from "../data.json";
import Skills from "../components/Skills";

const Home = () => {
  const [isOnBanner, setIsOnBanner] = useState(true);
  const bannerRef = useRef(null);

  const handleScroll = () => {
    if (!bannerRef.current) return;

    const bannerBottom = bannerRef.current.offsetTop + bannerRef.current.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY >= bannerBottom) {
      setIsOnBanner(false);
    } else {
      setIsOnBanner(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <div className="reverse">
        <Header isOnBanner={isOnBanner} />
        <Banner bannerRef={bannerRef} />
      </div>
      <About />
      <Skills />
      <div className="works-gallery">
        <h2>Projets</h2>
        <div className="works-container" id="Works">
          {data.map((work, index) => (
            <div className="project" key={index}>
              <h3>{work.title}</h3>
              <div className="works-img-container">
                {work.pictures.map((picture, picIndex) => (
                  <div key={`${work.title}-${picIndex}`} className="contain">
                    <img src={picture} alt={`works-pictures ${picIndex + 1} for ${work.title}`} className="works-img"/>
                  </div>
                ))}
              </div>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
