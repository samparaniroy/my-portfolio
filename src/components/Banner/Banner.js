import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div class="banner-area">
            <div class="container">
                <div class="row">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <h1>Front End Developer - React</h1>
                            <span>SINCE</span>
                            <h3>2022</h3>
                            <div className="banner-button">
                                <a href="#">Hire</a>
                                <a href="https://drive.google.com/file/d/12f_5itqLKMjUToI3lcre4tHotSzu_3qt/view" terget="_blank">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;