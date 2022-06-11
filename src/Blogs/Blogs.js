import React from 'react';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Header/Navbar';
import Paperfly from '../image/Project/Outline/PaperFly.png'
import './Blogs.css'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';


const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="blogs-section">
                <div className="blog-content">
                    <div className="blog-title">
                        <h2>My Blog is COMING SOON</h2>
                        <p>Meanwhile, feel free to interact with <br /> my social networks.</p>
                        <div className="social-media-icon">
                            <a target='-blank' href="https://www.linkedin.com/in/dev-habib/"><BsLinkedin/></a>
                            <a target='-blank' href="https://www.facebook.com/habibdc2018"><AiFillFacebook/></a>
                            <a target='-blank' href="https://github.com/alhabib911"><FaGithubSquare/></a>
                        </div>
                    </div>
                </div>
                <div className="blog-img">
                    <img src={Paperfly} alt="Snow" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;