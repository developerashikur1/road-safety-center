import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import CardSlider from './components/CardSlider';
import HeroSlider from './components/HeroSlider';
import InstituteSlider from './components/InstituteSlider';
import MultiSelectorImage from './components/MultiSelectorImage';
import TextSlider from './components/TextSlider';

const Home = () => {
    return (
        <>
            {/* <TextSlider /> */}
            <Header />
            
            <HeroSlider />
            <br /><br />
            <TextSlider />
            <br /><br />
            
            <MultiSelectorImage />
            
            <br /><br />
            <CardSlider />
            <br /><br />
            <br /><br /><br /><br /><br />
            <InstituteSlider />
            <br /><br />
           <Footer />
        </>
    );
};

export default Home;