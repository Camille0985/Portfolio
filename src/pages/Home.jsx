import React from 'react';
import Header from '../components/Header';
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
        </div>
    )
}

export default Home;