import React from 'react';
import About from '../Pages/About/About';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';

const AboutMe = () => {
    return (
        <div>
            <Navbar></Navbar>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;