import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';
import ReactIcon from '../image/Project/React.png'
import Firebase from '../image/Project/Firebase.png'
import Responsive from '../image/Project/Responsive.png'
import Admin from '../image/Project/AdminPanel.png'
import user from '../image/Project/Customer.png'
import First from '../image/Project/Kelong/FirstPage.png'
import Secound from '../image/Project/Kelong/SecoundPage.png'
import Third from '../image/Project/Kelong/ThirdPage.png'
import AdminPanelImg from '../image/Project/Kelong/AdminPanelImg.png'
import './ProjectDetails.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

const KelongGroup = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="project-slider">
                <div className="project-title">
                    <h2>Frontend Design</h2>
                    <h5>Unique shop design to make your business a true Manufacturer Website</h5>
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
                                <h2>Kelong-Group Manufacturer Website <small>MERN-Stack Project</small></h2>
                                <p><span>Overview:</span>
                                    <li>Customer and Admin have different access routes. Social login implemented and Responsive</li>
                                    <li>After login customers can product order, update their profile and share reviews.</li>
                                    <li>An Admin can order Manage, Products Add, User Manage and Product Manage.</li>
                                    <li>Use JWT for database security purposes.</li>
                                </p>
                                <h2><span>Technology:</span> <small>HTML, CSS, React Js, Tailwind, Daisy Ui, JWT, Node Js, Express Js, MongoDB, Firebase</small></h2>
                            </div>
                            <div className="github-link-feature">
                                <AiFillGithub />
                                <a className='github-btn' target='_blank' href="https://github.com/alhabib911/whole-sale-website-fontend">Font-End GitHub Link</a>
                            </div>
                            <div className="github-link-feature">
                                <AiFillGithub />
                                <a className='github-btn' target='_blank' href="https://github.com/alhabib911/whole-sale-website-backend">Back-End GitHub Link</a>
                            </div>
                            <div className="github-link">
                                <AiFillEye />
                                <a className='github-btn' target='_blank' href="https://kelong-group.web.app/">Live Site Link</a>
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
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Admin} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Admin Dashboard</h3>
                            <p>Admin have different access routes. After login admin can update their profile. He/she can order Manage, Products Add, User Manage and Product Manage.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={user} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Customer Access Dashboard</h3>
                            <p>Customer have different access routes. After login customer can update there profile. He/she can also product order, update their profile and share reviews.</p>
                        </div>
                    </div>
                </div>

                <div className="admin-area">
                    <div className="admin-feature-side">
                        <div class="card w-96 bg-base-100 mb-14 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title mt-6">Powerfull Admin Panel</h2>
                                <p>Admin can change profile, order Manage, Products Add, User Manage and Product Manage.</p>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title mt-6">Customer Profile</h2>
                                <p>Customer had after login product order, update their profile and share reviews access.</p>
                            </div>
                        </div>
                    </div>
                    <div className="admin-feature-image-side">
                        <img src={AdminPanelImg} />
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

export default KelongGroup;