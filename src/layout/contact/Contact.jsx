import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";

export default function Contact(){
  const form = useRef();
  const [response, setResponse] = useState("unsent");

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm("service_nzb16q8", "template_sdcvvpi", form.current, "CwuWBhkep40JC8Sn0")
      .then((result) => {
        setResponse("sent");
      }, (error) => {
        setResponse("error");
      });
      e.target.reset();
  };

  function responseDisplay(){
    if ( response === "error" ) return ( <div className="response response__error">An error Occured</div> );
    else if ( response === "sent" ) return ( <div className="response response__sent">Message Sent</div> );
    else return ( "" );
  }

  return (
    <div className="contact__wrapper block block__width">
      <h1 className="title">Contact</h1>
      <p>{"Lets work together!"}</p>
      <div className="divider"/>

      <div className="response__wrapper">
        {responseDisplay()}
      </div>

      <div className={"contact__form"}>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label className="contact__label">Name</label>
            <input className="contact__input" type="text" name="user_name" required/>
          </div>

          <div>
            <label className="contact__label">Email</label>
            <input className="contact__input" type="email" name="user_email" required/>
          </div>

          <div>
            <label className="contact__label">Message</label>
            <textarea className="contact__input" name="message" rows="8" required/>
          </div>

          <div className="contact__button--container">
          <button className="button contact__form-submit" type="submit">Send</button>
          </div>
        </form>
      </div>

      <div className="contact__icon--wrapper">
        <div className="contact__icon">
          <a href="https://github.com/michaelslaton" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </div>
        <div className="contact__icon">
          <a href="https://www.linkedin.com/in/michaelslatondev/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
      </div>

    </div>
  );
};