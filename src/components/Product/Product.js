import React from 'react';
import './Product.css'

const Product = () => {
    return (
        <div className="product-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product-title">
                            <h1>My Products</h1>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/convention.png" alt="" />
                            <h1>Convention Center</h1>
                            <p>Html, CSS, Bootstrap</p>
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/mission.png" alt="" />
                            <h1>Mission</h1>
                            <p>Html, CSS, Bootstrap, Tailwind</p>
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/influencer.png" alt="" />
                            <h1>Influencer</h1>
                            <p>Html, css, Bootstrap</p>
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/Conmebol.png" alt="" />
                            <h1>Conmabol</h1>
                            <p>Html, CSS</p>
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/provider.png" alt="" />
                            <h1>Independent</h1>
                            <p>Html, CSS, React Router, Firebase</p>
                            <a href="">Details</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/heathly.png" alt="" />
                            <h1>Heathly Food</h1>
                            <p>Html, CSS</p>
                            <a href="">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;