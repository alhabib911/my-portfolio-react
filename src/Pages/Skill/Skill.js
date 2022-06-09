import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <div className='skill-container'>
            <div className="skill-title">
                <div classNameName="skill-title">
                    <h2>My Skill</h2>
                </div>
                <div classNameName="skill-details">
                    <h2>HTML <small>90%</small></h2>
                    <div className="progress-bar-details">
                        <div className="skill-section">
                            <div className="skill-name">
                                <h2>HTML <small>75%</small></h2>
                            </div>
                            <div class="container">
                                <div class="progress progress-striped">
                                    <div class="progress-bar">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-section">
                            <div className="skill-name">
                                <h2>HTML <small>75%</small></h2>
                            </div>
                            <div class="container">
                                <div class="progress progress-striped">
                                    <div class="progress-bar">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-section">
                            <div className="skill-name">
                                <h2>HTML <small>75%</small></h2>
                            </div>
                            <div class="container">
                                <div class="progress progress-striped">
                                    <div class="progress-bar">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;