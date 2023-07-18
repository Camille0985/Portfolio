import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import '../style/Home.scss'
import '../style/Mobile.scss';
import Gallery from '../components/Gallery';

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <Banner page="home"/>
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home;