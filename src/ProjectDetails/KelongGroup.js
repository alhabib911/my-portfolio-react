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
                <div className="project-title">
                    <h2>Amazing features</h2>
                    <h5>Standard Manufacturer website with well-decorated front-end & exclusive features.</h5>
                </div>
                <div className="project-feature">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={ReactIcon} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Firebase} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Responsive} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Admin} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={user} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
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

            </div>
            <Footer></Footer>
        </div>
    );
};

export default KelongGroup;