import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';
import MyRecentProject from '../Pages/MyRecentProject/MyRecentProject';

const MyAllProjects = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="recent-project-title">
                <h2>My <span>All Projects</span></h2>
            </div>
            <MyRecentProject></MyRecentProject>
            <Footer></Footer>
        </div>
    );
};

export default MyAllProjects;