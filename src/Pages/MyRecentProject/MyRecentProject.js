import React from 'react';
import './MyRecentProject.css'
import KelongDex from '../../image/Project/KelongDex.png'
import kelongMob from '../../image/Project/KelongMob.png'
import ZMDex from '../../image/Project/ZMDex.png'
import ZMMob from '../../image/Project/ZMMob.png'
import DentalDex from '../../image/Project/DentalDex.png'

const MyRecentProject = () => {
    return (
        <div className='recent-project'>
            <div className="recent-project-title">
                <h2>My Recent Projects</h2>
            </div>
            <div className="recent-project-details">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="project-image px-5 pt-5">
                        <img className='img-1' src={KelongDex} />
                        <img className='img-2' src={kelongMob} />
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Kelong-Group</h2>
                        <p>A full-stack responsive Manufacturer Website. Customer can order products, also make a review and admin can access product and order management.</p>
                        <div class="card-actions">
                            <a className='github-link' target='_blank' href="https://github.com/alhabib911/whole-sale-website-fontend">GitHub</a>
                            <a className='resume-dwn-link' target='_blank' href='https://kelong-group.web.app/' download>Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="project-image px-5 pt-5">
                        <img className='img-1' src={ZMDex} />
                        <img className='img-2' src={ZMMob} />
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Zayn & Myza Warehouse Management</h2>
                        <p>A full-stack responsive Warehouse Management Website. User can update product and also see their own upload product and also update, Edit and delete access. </p>
                        <div class="card-actions">
                            <a className='github-link' target='_blank' href="https://github.com/alhabib911/warehouse-managenent-website-fontend">GitHub</a>
                            <a className='resume-dwn-link' target='_blank' href='https://zayn-9e9756.web.app/' download>Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="project-image px-5 pt-5">
                        <img className='img-1' src={DentalDex} />
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Jackson Dental Care</h2>
                        <p>Client interface website is Jackson Dental Care. Without user access cannot go to checkout page</p>
                        <div class="card-actions">
                            <a className='github-link' target='_blank' href="https://github.com/alhabib911/jackson-dental-care-client-side">GitHub</a>
                            <a className='resume-dwn-link' target='_blank' href='https://jackson-dental-care.web.app/' download>Live Site</a>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default MyRecentProject;