import React from 'react';
import Plug from '../image/Project/Outline/Plug.png'
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'
import { AiOutlineHome } from 'react-icons/ai';


const NotFoundPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="page-not-found-container">
                <div className="not-found-page-text">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                </div>
                <div className="not-found-page-img">
                    <img src={Plug} alt="" />
                </div>
                <div className="not-found-page-bottom-text">
                    <p>We're sorry the page your requested could not be found <br /> please go back to homepage</p>
                    <div className="go-home-btn">
                        <Link className='go-home-btn-link' to='/home'><AiOutlineHome /> GO HOME</Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFoundPage;