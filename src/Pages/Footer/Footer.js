import React, { useRef } from 'react';
import './Footer.css'
import logoImage from '../../image/logoImg.png'
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';



const Footer = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9sa5s6g', 'template_60vluda', form.current, 'gRQt21wdg0IrHYKQS')

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            .then(() => {
                toast('Email Sent')
                e.target.reset()

            })
            ;
    };
    return (
        <div>
            <div className='footer'>
                <footer className='footer-container'>
                    <div className="footer-logo">
                        <div className="portfolio-logo">
                            <div class="avatar">
                                <div class="w-10 rounded-full">
                                    <img src={logoImage} />
                                </div>
                            </div>
                            <div className='logo-title-text'>
                                <a href="/home">HABIB.</a>
                            </div>
                        </div>
                        <div className="footer-text">
                            <p>Welcome and open yourself to your truest <br /> love with me!  Visit my social media link to join me.</p>
                        </div>
                        <div className="social-media">
                            <a target='_blank' href="https://www.linkedin.com/in/dev-habib/"><BsLinkedin /></a>
                            <a target='_blank' href="https://www.facebook.com/habibdc2018"><AiFillFacebook /></a>
                            <a target='_blank' href="https://github.com/alhabib911"><BsGithub /></a>
                        </div>
                    </div>

                    <div className="navigation">
                        <h5>Navigation</h5>
                        <Link to='/about'>- About</Link>
                        <Link to='/project'>- Project</Link>
                        <Link to='/contact  '>- Contact</Link>
                        <Link to=''>- Blog</Link>
                    </div>
                    <div className="newsletter">
                        <h5>Newsletter</h5>
                        <form className='newsletter-form' ref={form} onSubmit={sendEmail}>
                            <label>Email</label> <br />
                            <input className='name-email' type="email" name="user_email" placeholder='Enter Your Email' /> <br />
                            <div className='newsletter-button'>
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </footer>
                <ToastContainer />
            </div>
            <div className='copyright-area'>
                <p>Copyright © {new Date().getFullYear()} Abdullah Al Habib. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;