import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-title">
                           <h1>About Me</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h1>Hey I am <span>Sampa Rani Roy</span></h1>
                            <p>I am a junior web designer. I have 1 year experience web design. I am a talented front end developer. Knock me if you need my service</p>
                            <div className="about-button">
                                <a href="#">Linkedin</a>
                                <a href="https://drive.google.com/file/d/12f_5itqLKMjUToI3lcre4tHotSzu_3qt/view">Resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image">
                            <img src="images/about.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;