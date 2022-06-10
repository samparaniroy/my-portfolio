import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('Email', 'template_6n7d1fo', form.current, '7TMM5U5owU4wq4OaA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
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
                        <form onSubmit={sendEmail}>
                            <input type="text" name="" placeholder='Name' />
                            <br/>
                            <input type="text" placeholder='Enter from name' />
                            <br/>
                            <textarea type="text" placeholder='Enter Your Message' />
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