import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Services from '../components/Services';

const Home = () => {
const [isOpen, setIsOpen]=useState(false);
const toggle = () => {
    setIsOpen(!isOpen);
};

    return (
        // fragments 
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/> 
            <Footer />
        </>

    );
};

export default Home