import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-title">
                            <h1>Contact Me</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-image">
                            <img src="images/contact.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-form">
                        <form>
                            <input type="text" name="" id="toName" placeholder='Name' />
                            <br/>
                            <input type="text" id="fromName" placeholder='Enter from name' />
                            <br/>
                            <textarea type="text" id="massage" placeholder='Enter Your Message' />
                            <br/>
                            <input className='submit-button' type="submit" value="Send Email" />
                        </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;