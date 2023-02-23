import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import CardSlider from './components/CardSlider';
import HeroSlider from './components/HeroSlider';
import TextSlider from './components/TextSlider';

const Home = () => {
    return (
        <>
            {/* <TextSlider /> */}
            <Header />
            <br /><br />
            <HeroSlider />
            <br /><br />
            <TextSlider />
            <br /><br />
            <CardSlider />
            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           <Footer />
        </>
    );
};

export default Home;