import React from 'react';
import { MdPhone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { TbLocation } from 'react-icons/tb';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-container'>
            <div className="contact-page-title">
                <h2>Get in Touch</h2>
            </div>
            <div className="contact-section">
                <div className="info-icon">
                    <div className="contact-info">
                        <div className="icon-details">
                            <div className="icon">
                                <MdPhone />
                            </div>
                            <div className="info">
                                <h5>Phone</h5>
                                <p>+880 1753 105250</p>
                            </div>
                        </div>
                        <div className="icon-details">
                            <div className="icon">
                                <AiOutlineMail />
                            </div>
                            <div className="info">
                                <h5>Email</h5>
                                <p>abdullahalhabib100@gmail.com</p>
                            </div>
                        </div>
                        <div className="icon-details">
                            <div className="icon">
                                <TbLocation />
                            </div>
                            <div className="info">
                                <h5>Location</h5>
                                <p>Jhenaidah, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="social-network">
                        <div className="linkedin">
                            <BsLinkedin />
                        </div>
                        <div className="fb">
                            <AiFillFacebook />
                        </div>
                        <div className="github">
                            <BsGithub />
                        </div>
                    </div>
                </div>
                <form className="contact-form">
                    <div className="name-email">
                        <div className="form-name">
                            <label htmlFor="name">Name</label> <br />
                            <input type="text" name="name" id="" /> <br />
                        </div>
                        <div className="form-email">
                            <label htmlFor="email">Email</label> <br />
                            <input type="email" name="email" id="" />
                        </div>
                    </div>
                    <div className="sub-text">
                        <div className="sub">
                            <label htmlFor="sub">Subject</label> <br />
                            <input type="text" name="sub" id="" />
                        </div>
                        <div className="text">
                            <label htmlFor="text">Message *</label> <br />
                            <textarea name="text" id="" ></textarea>
                        </div>
                    </div>
                    <button className='message-send-button' type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;