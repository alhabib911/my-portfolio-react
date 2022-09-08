import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Footer from '../../Pages/Footer/Footer';
import Navbar from '../../Pages/Header/Navbar';
import First from '../../image/Project/Knot/Feature.png'
import ReactIcon from '../../image/Project/React.png'
import Firebase from '../../image/Project/Firebase.png'
import Responsive from '../../image/Project/Responsive.png'
import TeamManagement from '../../image/Project/Knot/TeamManagementIcon.png'
import HR from '../../image/Project/Knot/HRIcon.png'
import Finance from '../../image/Project/Knot/FinanceIcon.svg'
import Sales from '../../image/Project/Knot/SalesIcon.png'
import UserDashboard from '../../image/Project/Knot/UserDashboardIcon.png'
import Chat from '../../image/Project/Knot/GroupChatIcon.png'
import FinanceFeature from '../../image/Project/Knot/Finance.png'
import SalesFeature from '../../image/Project/Knot/Sales.png'
import UserDashboardFeature from '../../image/Project/Knot/UserDashboard.png'
import './Knot.css'

const Knot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="project-slider">
                <div className="project-title">
                    <h2>Frontend Design</h2>
                    <h5>Startup product-selling "companies" can easily manage their company by using KNOT website.</h5>
                </div>

            </div>
            <div className="projects-details">
                <div className="site-area">
                    <div className="site-overview">
                        <div className="site-img">
                            <img className='firstImage' src={First} />
                        </div>
                        <div class="site-link">
                            <div className="site-link-title">
                                <h2>Knot - Cloud Business Management Website<small> MERN-Stack Project</small></h2>
                                <p><span>Overview:</span>
                                    <li>Product selling company can easily manage their company’s employees, Sales & Finance.</li>
                                    <li>Real time Department wise Group chat system.</li>
                                    <li>Full website is responsive.</li>
                                    <li>Use JWT for website secure</li>
                                    
                                </p>
                                <h2><span>Technology:</span> <small>HTML, CSS, React Js, Redux, Tailwind, Daisy Ui, JWT, Node Js, Express Js, MongoDB, Firebase</small></h2>
                            </div>
                            <div className="github-link-feature">
                                <AiFillGithub />
                                <a className='github-btn' target='_blank' href="https://github.com/TeamHero6/knot-client">Font-End GitHub Link</a>
                            </div>
                            <div className="github-link-feature">
                                <AiFillGithub />
                                <a className='github-btn' target='_blank' href="https://github.com/TeamHero6/knot-server">Back-End GitHub Link</a>
                            </div>
                            <div className="github-link">
                                <AiFillEye />
                                <a className='github-btn' target='_blank' href="https://knot-849b7.web.app/">Live Site Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-title">
                    <h2>Amazing features</h2>
                    <h5>A Great Business Management Website for startup company</h5>
                </div>
                <div className="project-feature">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={ReactIcon} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>MERN-Stack Project</h3>
                            <p>Font-End for most popular React Js </p>
                                <p> Node Js and Express For Back-End.</p> 
                                <p> MongoDB used for Database.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Firebase} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Firebase Authentication System</h3>
                            <p>Email Password Authentication implemented.</p>
                            <p>Company Wise Login Data Backup</p>
                            <p>Employees login need a secret code</p>
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
                        <figure><img className='mt-6' src={TeamManagement} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Team Management</h3>
                            <p>Team leader can assign their team members daily task and can added meeting, warning and award</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={HR} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Human Resource</h3>
                            <p>Human Resource Team can handle their employee easily and also add new employee in their database</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Finance} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Finance Management</h3>
                            <p>Accounted can manage easily their Finance History</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Sales} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Sales Management</h3>
                            <p>Sales team can see all sales history, Vendor database, Return product history and many others history which was relevant in sales management</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={UserDashboard} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>User Dashboard</h3>
                            <p>Login User can see their update status which was assign or update by Team leader and HR team and also give their attendance</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='mt-6' src={Chat} /></figure>
                        <div class="card-body">
                            <h2 class="card-title"></h2>
                            <h3 className='card-header-text'>Chat</h3>
                            <p>For login group chat must input their secret code. Which was provide by CEO or manager and chat system is department wise</p>
                        </div>
                    </div>
                </div>

                <div className="screen-shot">
                    <div className="screen-shot-title">
                        <h2>Project Screenshots</h2>
                    </div>
                    <div className="screen-shot-img">
                        <img src={FinanceFeature} alt="" />
                        <img src={SalesFeature} alt="" />
                        <img src={UserDashboardFeature} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Knot;