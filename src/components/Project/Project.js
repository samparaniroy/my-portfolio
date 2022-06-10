import React from 'react';
import './Project.css'

const Project = () => {
    return (
        <div className="product-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product-title">
                            <h1>My Project</h1>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/convention.png" alt="" />
                            <h1>Convention Center</h1>
                            <p>Html, CSS, Bootstrap</p>
                            <div className='info'>
                                <a href="https://github.com/samparaniroy/Convention-center" target="_blank">Github</a>
                                <a href="https://github.com/samparaniroy/Convention-center" target="_blank">Live Site</a>
                            </div>
                            <a href=""><button>Details</button></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/mission.png" alt="" />
                            <h1>Mission</h1>
                            <p>Html, CSS, Bootstrap, Tailwind</p>
                            <div className='info'>
                                <a href="https://github.com/samparaniroy/assignment1" target="_blank">Github</a>
                                <a href="https://cosmic-bombolone-a4e9a7.netlify.app/" target="_blank">Live Site</a>
                            </div>
                            <a href=""><button>Details</button></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/influencer.png" alt="" />
                            <h1>Influencer</h1>
                            <p>Html, css, Bootstrap</p>
                            <div className='info'>
                                <a href="https://github.com/samparaniroy/assignment-2" target="_blank">Github</a>
                                <a href="https://inspiring-pegasus-fa8027.netlify.app/" target="_blank">Live Site</a>
                            </div>
                            <a href=""><button>Details</button></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/Conmebol.png" alt="" />
                            <h1>Conmabol</h1>
                            <p>Html, CSS</p>
                            <div className='info'>
                                <a href="https://github.com/samparaniroy/Conmebol" target="_blank">Github</a>
                                <a href="https://curious-sherbet-a27ffd.netlify.app/" target="_blank">Live Site</a>
                            </div>
                            <a href=""><button>Details</button></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/provider.png" alt="" />
                            <h1>Independent</h1>
                            <p>Html, CSS, React Router, Firebase</p>
                            <div className='info'>
                                <a href="https://github.com/samparaniroy/independent-service-provider" target="_blank">Github</a>
                                <a href="https://independent-service-prov-25ebf.firebaseapp.com/" target="_blank">Live Site</a>
                            </div>
                            <a href=""><button>Details</button></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-content">
                            <img src="images/heathly.png" alt="" />
                            <h1>Heathly Food</h1>
                            <p>Html, CSS</p>
                            <div className='info'>
                                <a href="https://github.com/samparaniroy/assignment1" target="_blank">Github</a>
                                <a href="https://extraordinary-quokka-b11d96.netlify.app/" target="_blank">Live Site</a>
                            </div>
                            <a href=""><button>Details</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;