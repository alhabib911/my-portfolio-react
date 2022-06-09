import React from 'react';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';

const GetInTouch = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default GetInTouch;