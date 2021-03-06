import emailjs from "emailjs-com";
import React, { useState } from 'react';
import './contactForm.css'
// import { Button } from '../ButtonElement.js';

export default function ContactUs({ closeModal }) {
  const [submitSuccess, setSubmitSuccess] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_h7ocasz', 'template_9jtaijk', e.target, 'user_WiyfsTUJQi6oy6E5vtgvY')
        .then((result) => {
            setSubmitSuccess(true);
            console.log(submitSuccess);
            return submitSuccess;
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    // console.log(submitSuccess)

    return(
        <div>
            <div className="container">
            <h1>Contact</h1>
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                    <p className='contact-text'>Name</p>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="" name="from_name"/>
                        </div>
                        <p className='contact-text'>Email</p>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="" name="email" required/>
                        </div>
                        <p className='contact-text'>Message</p>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-message" id="" cols="30" rows="8" placeholder="" name="message" required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info send-btn" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
