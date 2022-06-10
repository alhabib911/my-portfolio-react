import React from 'react';
import './MyRecentProject.css'
import Kelong from '../../image/Project/Kelong.png'
import ZM from '../../image/Project/ZM.png'
import Dental from '../../image/Project/Dental.png'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { BsArrowUpRightSquare } from 'react-icons/bs';

const MyRecentProject = () => {
    return (
        <div className='recent-project'>
            <div className="recent-project-title">
                <h2>My Recent Projects</h2>
            </div>
            <div className="recent-project-details">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Kelong} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
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
                                <a className='live-server-link' target='_blank' href='https://kelong-group.web.app/'>View Details</a>
                            </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    
                    <figure>
                        <img src={ZM} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
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
                                <a className='live-server-link' target='_blank' href='https://kelong-group.web.app/'>View Details</a>
                            </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Dental} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
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
                                <a className='live-server-link' target='_blank' href='https://kelong-group.web.app/'>View Details</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRecentProject;