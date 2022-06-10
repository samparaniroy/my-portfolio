import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('Email', 'template_6n7d1fo', form.current, '7TMM5U5owU4wq4OaA')
        .then((result) => {
            console.log(result.text);
            toast('Sent email')
        }, (error) => {
            console.log(error.text);
        });
    };
    // function sendMail(params){
        
    //     var tempParams ={
    //         from_name: document.getElementById("fromName"),
    //         to_name: document.getElementById("toName"),
    //         message: document.getElementById("massage")
    //     } 
    //     emailjs.send('Email', 'template_6n7d1fo', '7TMM5U5owU4wq4OaA', tempParams)
    //     .then(function(res){
    //         console.log('success', res.status)
    //     })
    // };
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
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Contact;