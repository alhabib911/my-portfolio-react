import React from 'react';
import './MyRecentProject.css'
import Kelong from '../../image/Project/Kelong/Kelong.png'
import ZM from '../../image/Project/ZM/zm.png'
import Knot from '../../image/Project/Knot/Knot.png'
import Dental from '../../image/Project/Dental/jackson.png'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const MyRecentProject = () => {
    return (
        <div className='recent-project'>
            <div className="recent-project-details">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Knot} /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-lg">
                            Knot - Cloud Business Management
                        </h2>
                        <p>Knot is a Business Management Website. Startup product-selling "companies" can easily manage their
                            company by using KNOT website.</p>
                        <p><small>TECHNOLOGY: HTML, CSS, React Js, Redux, Tailwind, Daisy Ui, JWT, Node Js, Express Js, MongoDB, Firebase</small></p>
                        <div class="card-actions">
                            <div className="github-link">
                                <AiFillGithub />
                                <a className='github-btn' target='_blank' href="https://github.com/TeamHero6/knot-client">GitHub</a>
                            </div>
                            <div className="live-server">
                                <AiFillEye />
                                <a className='live-server-link' target='_blank' href='https://knot-849b7.web.app/'>Live Site</a>
                            </div>
                        </div>
                        <div className="view-details">
                            <BsArrowUpRightSquare />
                            <Link className='live-server-link' to='/knot'>View Details</Link>

                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Kelong} /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-lg">
                            Kelong-Group
                        </h2>
                        <p>A full-stack responsive Manufacturer Website. Customer can order products, also make a review and admin can access product and order management.</p>
                        <p><small>TECHNOLOGY: HTML, CSS, React Js, Tailwind, Daisy Ui, JWT, Node Js, Express Js, MongoDB, Firebase</small></p>
                        <div class="card-actions">
                            <div className="github-link">
                                <AiFillGithub />
                                <a className='github-btn' target='_blank' href="https://github.com/alhabib911/whole-sale-website-fontend">GitHub</a>
                            </div>
                            <div className="live-server">
                                <AiFillEye />
                                <a className='live-server-link' target='_blank' href='https://kelong-group.web.app/'>Live Site</a>
                            </div>
                        </div>
                        <div className="view-details">
                            <BsArrowUpRightSquare />
                            <Link className='live-server-link' to='/kelong  '>View Details</Link>

                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">

                    <figure>
                        <img src={ZM} /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-lg">
                            Zayn & Myza Warehouse Management
                        </h2>
                        <p>A full-stack responsive Warehouse Management Website. User can update product and also see their own upload product and also update, Edit and delete access.</p>
                        <p><small>TECHNOLOGY: HTML, CSS, React Js, React-Bootstrap, JWT, Node Js, Express Js, MongoDB, Firebase</small></p>
                        <div class="card-actions">
                            <div className="github-link">
                                <AiFillGithub />
                                <a className='github-btn' target='_blank' href="https://github.com/alhabib911/warehouse-managenent-website-fontend">GitHub</a>
                            </div>
                            <div className="live-server">
                                <AiFillEye />
                                <a className='live-server-link' target='_blank' href='https://zayn-9e9756.web.app/'>Live Site</a>
                            </div>
                        </div>
                        <div className="view-details">
                            <BsArrowUpRightSquare />
                            <Link className='live-server-link' to='/zm  '>View Details</Link>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Dental} /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-lg">
                            Jackson Dental Care
                        </h2>
                        <p>Client interface website is Jackson Dental Care. Without user access cannot go to checkout page</p>
                        <p><small>TECHNOLOGY: HTML, CSS, React Js, React-Bootstrap, Firebase</small></p>
                        <div class="card-actions">
                            <div className="github-link">
                                <AiFillGithub />
                                <a className='github-btn' target='_blank' href="https://github.com/alhabib911/jackson-dental-care-client-side">GitHub</a>
                            </div>
                            <div className="live-server">
                                <AiFillEye />
                                <a className='live-server-link' target='_blank' href='https://jackson-dental-care.web.app/'>Live Site</a>
                            </div>
                        </div>
                        <div className="view-details">
                            <BsArrowUpRightSquare />
                            <Link className='live-server-link' to='/dental  '>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRecentProject;