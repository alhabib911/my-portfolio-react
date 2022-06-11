import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import ReactIcon from '../image/Project/Reactjs.png'
import Firebase from '../image/Project/Firebase.png'
import Responsive from '../image/Project/Responsive.png'
import First from '../image/Project/Dental/First.png'
import Secound from '../image/Project/Dental/Secound.png'
import Third from '../image/Project/Dental/Third.png'
import './ProjectDetails.css'

const Dental = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="project-slider">
                <div className="project-title">
                    <h2>Frontend Design</h2>
                    <h5>Unique design with Email Password and Social Login Implement website</h5>
                </div>
            </div>
            <div className="projects-details">
                <div className="site-area">
                    <div className="site-overview">
                        <div className="site-img">
                            <img src={First} />
                        </div>
                        <div class="site-link">
                            <div className="site-link-title">
                                <h2>Jackson Dental Care <small>Font-End Project</small></h2>
                                <p><span>Overview:</span>
                                    <li>Email Password and Social login Authentication implemented and Responsive Design.</li>
                                    <li>Authentication Error, Reset Password, Verify Email implemented.</li>
                                    <li>An Admin can order Manage, Products Add, User Manage and Product Manage.</li>
                                    <li>Without user access not possible to go checkout page.</li>
                                </p>
                                <h2><span>Technology:</span> <small>HTML, CSS, React Js, React-Bootstrap, Firebase</small></h2>
                            </div>

                            <div className="github-link-feature">
                                <AiFillGithub />
                                <a className='github-btn' target='_blank' href="https://github.com/alhabib911/jackson-dental-care-client-side">Font-End GitHub Link</a>
                            </div>
                            <div className="github-link">
                                <AiFillEye />
                                <a className='github-btn' target='_blank' href="https://jackson-dental-care.web.app/">Live Site Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-title">
                    <h2>Amazing features</h2>
                    <h5>Standard Manufacturer website with well-decorated front-end & exclusive features.</h5>
                </div>
                <div className="project-feature">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={ReactIcon} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Font-End Project</h3>
                            <p>Font-End for most popular React js Library.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Firebase} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Firebase Authentication System Implement</h3>
                            <p>Email Password and Google login Authentication implemented.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Responsive} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>100% Responsive design</h3>
                            <p>The entire layout is available to 100% fit for any sizes of screen.</p>
                        </div>
                    </div>
                </div>

                <div className="screen-shot">
                    <div className="screen-shot-title">
                        <h2>Project Screenshots</h2>
                    </div>
                    <div className="screen-shot-img">
                    <img src={First} alt="" />
                        <img src={Secound} alt="" />
                        <img src={Third} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dental;