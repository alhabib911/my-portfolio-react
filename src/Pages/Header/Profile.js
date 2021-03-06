import React from 'react';
import './Profile.css'
import MyImage from '../../image/ProfilePhoto.png'
import TypeAnimation from 'react-type-animation';
import Resume from '../../image/RESUME OF ABDULLAH AL HABIB.pdf'
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';

const Profile = () => {
    return (
        <div className="header">
            <div className='profile-container '>
                <div className="profile-title-container">
                    <h3 className='welcome-title'>Hi, I am</h3>
                    <h1 className='name'>Abdullah Al Habib</h1>
                    <div className='type-animition'>
                        <p>I am</p>
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                'Web Developer.',
                                2000,
                                'Programer.',
                                2000,
                            ]}
                            wrapper="h3"
                            repeat={Infinity}
                        />
                    </div>
                    <div className="profile-container-button">
                        <div className="hire-me-btn">
                            <Link className='hire-me' to='/contact'>Hire Me</Link>
                        </div>
                        <div className="resume-download-section">
                            <FiDownload />
                            <a className='resume-dwn-btn' href={Resume} download>Download Resume</a>
                        </div>
                    </div>

                </div>
                <div className="profile-img-container mt-12">
                    <img src={MyImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Profile;