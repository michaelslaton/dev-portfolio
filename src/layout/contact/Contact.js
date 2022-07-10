import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact(){
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_nzb16q8', 'template_sdcvvpi', form.current, 'CwuWBhkep40JC8Sn0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="block-bottom">

      <div className="text-wrapper">
        <h1 className="title">Contact</h1>
        <p>Lets work together!</p>
      </div>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label className="contact-label">Name</label>
            <input className="contact-input" type="text" name="user_name" required/>
          </div>

          <div>
            <label className="contact-label">Email</label>
            <input className="contact-input" type="email" name="user_email" required/>
          </div>

          <div>
            <label className="contact-label">Message</label>
            <textarea className="contact-input" name="message" rows="8" required/>
          </div>

          <div className="contact-button-container">
          <input className="small-button form-submit" type="submit" value="Send"/>
          </div>
        </form>
      </div>

      <div className="contact-icon-wrapper">
        <div className="contact-icon">
          <a href="https://github.com/michaelslaton" target="_blank">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </div>
        <div className="contact-icon">
          <a href="https://www.linkedin.com/in/michaelslatondev/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
      </div>

    </div>
  );
};