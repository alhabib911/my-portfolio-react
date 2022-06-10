import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import First from '../image/Project/ZM/First.png'
import Secound from '../image/Project/ZM/Secound.png'
import Third from '../image/Project/ZM/Third.png'
import ReactIcon from '../image/Project/React.png'
import Firebase from '../image/Project/Firebase.png'
import Responsive from '../image/Project/Responsive.png'
import Interface from '../image/Project/ZM/Interface.png'
import './ProjectDetails.css'


const ZM = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="project-slider">
                <div className="project-title">
                    <h2>Frontend Design</h2>
                    <h5>Unique design to make your business a true Inventory Management Website</h5>
                </div>
                <div class="carousel w-full">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src={First} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src={Secound} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src={Third} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-details">
                <div class="site-link">
                    <div className="github-link-feature">
                        <AiFillGithub />
                        <a className='github-btn' target='_blank' href="https://github.com/alhabib911/warehouse-managenent-website-fontend">Font-End GitHub Link</a>
                    </div>
                    <div className="github-link-feature">
                        <AiFillGithub />
                        <a className='github-btn' target='_blank' href="https://github.com/alhabib911/warehouse-managenent-website-backend">Back-End GitHub Link</a>
                    </div>
                    <div className="github-link">
                        <AiFillEye />
                        <a className='github-btn' target='_blank' href="https://zayn-9e9756.web.app/">Live Site Link</a>
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
                            <h3 className='card-header-text'>MERN-Stack Project</h3>
                            <p>Font-End for most popular React Js with Node Js and Express For Back-End. MongoDB used for Database.</p>
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

                <div className="admin-area">
                    <div className="admin-feature-side">
                        <div class="card w-96 bg-base-100 mb-14 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title mt-6">Inventory Management</h2>
                                <p>After login user can manage Inventory. User can delete product.</p>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title mt-6">Update Feature</h2>
                                <p>After login user can update product. User has delivery and edit access. If click delivered button 1 quantity loss and also can product quantity update.</p>
                            </div>
                        </div>
                    </div>
                    <div className="admin-feature-image-side">
                        <img src={Interface} />
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ZM;