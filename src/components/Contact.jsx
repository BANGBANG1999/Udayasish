import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"


function Contact() { 

  const ref = useRef()
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3eqg94q', 'template_epeogci', ref.current, '9DXEwKyJ-L8yLJi5m')
    .then((result) => {
        // console.log(result.text);
        
          setSuccess(true);
      
        setSuccess(false)
    }, (error) => {
        // console.log(error.text);
        setSuccess(false)
    });
  }

  return (
    <div className="contact_section" >
      <div className="contact_container">
        <div className="left_contact">
          <form ref={ref} onSubmit={handleSubmit} className="form">
            <h1 className="title">Contact</h1>
            <input type="text" name="name" className="name" placeholder='Enter your name'/>
            <input type="text" name="email" className="email" placeholder='Enter your email'/>
            <textarea name="message" className="message" rows='10' placeholder='Write your message'></textarea>
            <button type="submit" className="send">Send</button>
            {success && "Your message has been sent. We'll get back to you soon :)"}
          </form>
        </div>
        <div className="right_contact">
          
        </div>
      </div>
    </div>
  )
}

export default Contact
