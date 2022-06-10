import React from 'react';
import './About.css'
import AboutImage from '../../image/AboutImage.png'
import Resume from '../../image/RESUME OF ABDULLAH AL HABIB.pdf'
import { FiDownload } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';


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
                    <p>Hello! I am a MERN-Stack developer. I love to use my creativity and make something new. So I love to do new projects with JavaScript's Framework React JS and Tailwind or Bootstrap's Library. I like working with Raw CSS. Over the last 6 months, I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can make beautiful UIs and also can handle the back-end smoothly. <br /> <br />
                        <span>
                            I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am down to earth honest, confident, fun loving and caring as well.
                        </span></p>
                </div>
            </div>
            <div className="about-link-section">
                <div className="github-link">
                    <AiFillGithub />
                    <a className='github-btn' target='_blank' href="https://github.com/alhabib911">GitHub</a>
                </div>
                <div className="resume-download-section">
                    <FiDownload />
                    <a className='resume-dwn-btn' href={Resume} download>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default About;