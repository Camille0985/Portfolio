import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";

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
      <Works />
    </div>
  );
};

export default Home;
