import React, { useRef } from 'react';
import { MdPhone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { TbLocation } from 'react-icons/tb';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import './ContactUs.css'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9sa5s6g', 'template_oebzn9h', form.current, 'gRQt21wdg0IrHYKQS')

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
                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                    <label>Name</label> <br />
                    <input className='name-email' type="text" name="user_name" /> <br />
                    <label>Email</label> <br />
                    <input className='name-email' type="email" name="user_email" /> <br />
                    <label>Message</label><br />
                    <textarea name="message" /><br /> <br />
                    <div className='message-submit-button'>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;