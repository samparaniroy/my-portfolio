import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div class="navbar-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="logo-area">
                            <h1>Sampa</h1>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="menubar-area">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="https://drive.google.com/file/d/12f_5itqLKMjUToI3lcre4tHotSzu_3qt/view">Resume</a></li>
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