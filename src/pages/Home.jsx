import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Home = () => {
  const [isOnBanner, setIsOnBanner] = useState(true);
  const bannerRef = useRef(null);

  const handleScroll = () => {
    if (!bannerRef.current) return;
  
    const banner = bannerRef.current.getBoundingClientRect();
    const header = document.getElementById("Header").getBoundingClientRect();
  
    if (header.bottom <= banner.bottom) {
      setIsOnBanner(true);
    } else {
      setIsOnBanner(false);
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
      <main>
        <About />
        <Skills />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
