import React from 'react';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import MyRecentProject from '../MyRecentProject/MyRecentProject';
import Skill from '../Skill/Skill';
import Profile from '../Header/Profile';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Profile></Profile>
            <About></About>
            <Skill></Skill>
            <div className="recent-project-title">
                <h2>My <span>Recent Projects</span></h2>
            </div>
            <MyRecentProject></MyRecentProject>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;