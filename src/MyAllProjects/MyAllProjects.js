import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';
import MyRecentProject from '../Pages/MyRecentProject/MyRecentProject';

const MyAllProjects = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MyRecentProject></MyRecentProject>
            <Footer></Footer>
        </div>
    );
};

export default MyAllProjects;