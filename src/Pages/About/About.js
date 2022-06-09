import React from 'react';
import './About.css'
import AboutImage from '../../image/AboutImage.png'
import Resume from '../../image/RESUME OF ABDULLAH AL HABIB.pdf'



const About = () => {
    return (
        <div className='about-container'>
            <div className="about-title">
                <h2>About Me</h2>
            </div>
            <div className="about-section">
                <div className="about-image">
                    <img src={AboutImage} alt="" />
                </div>
                <div className="about-details">
                    <p>Hello! I'm Fahim, a programmer with a good level of expertise in Front-End Web Development. I'm currently studying at Imperial College of Engineering pursuing a degree BSc Engineering in Computer Science & Engineering under Rajshahi University. I'm a tech lover and like to write blogs about programming and web development. I'm interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack web development. <br /> <br />
                        I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am down to earth honest, confident, fun loving and caring as well.</p>
                </div>
            </div>
            <div className="about-link-section">
                <a className='github-link' target='_blank' href="https://github.com/alhabib911">GitHub</a>
                <a className='resume-dwn-link' href={Resume} download>Download Resume</a>
            </div>
        </div>
    );
};

export default About;