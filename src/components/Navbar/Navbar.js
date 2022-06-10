import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="logo-area">
                            <h1>Sampa</h1>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="menubar-area">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="https://drive.google.com/file/d/12f_5itqLKMjUToI3lcre4tHotSzu_3qt/view" target="_blank" download>Resume</a></li>
                                <li><a href="#">Projects</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;