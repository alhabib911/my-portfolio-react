import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Resume from '../../image/RESUME OF ABDULLAH AL HABIB.pdf'
import { FiDownload } from 'react-icons/fi';
import logoImage from '../../image/logoImg.png'

const Navbar = () => {
    return (
        <div className='nabvar-container'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/project'>Project</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>

                        </ul>
                    </div>
                    <div className="portfolio-logo">
                        <div class="avatar">
                            <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={logoImage} />
                            </div>
                        </div>
                        <div className='logo-title'>
                            <a href="/home">HABIB.</a>
                        </div>
                    </div>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/project'>Project</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <div className='download-resume-section'>
                            <FiDownload />
                            <a className='resume-dwn' href={Resume} download>Download Resume</a>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;