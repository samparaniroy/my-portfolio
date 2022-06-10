import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <div className="skill-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="skill-title">
                            <h1>My Skill</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="info">
                            <h1>HTML</h1>
                            <div className="process">
                                <div className="process-bar-html">
                                <span>90%</span>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <h1>CSS</h1>
                            <div className="process">
                                <div className="process-bar-css">
                                <span>80%</span>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <h1>Bootstrap</h1>
                            <div className="process">
                                <div className="process-bar-bootstrap">
                                <span>85%</span>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <h1>Tailwind</h1>
                            <div className="process">
                                <div className="process-bar-tailwind">
                                <span>70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="info">
                            <h1>Javascript</h1>
                            <div className="process">
                                <div className="process-bar-javascript">
                                <span>80%</span>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <h1>ReactJs</h1>
                            <div className="process">
                                <div className="process-bar-reactjs">
                                <span>75%</span>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <h1>NodeJs</h1>
                            <div className="process">
                                <div className="process-bar-nodejs">
                                <span>70%</span>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <h1>Mongodb</h1>
                            <div className="process">
                                <div className="process-bar-mongodb">
                                <span>65%</span>
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