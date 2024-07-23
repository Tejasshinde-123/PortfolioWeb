import React from 'react';
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d5effa1b-804f-48bd-9445-73b65e2d59a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contactTitle">
        <h1>Get In Touch</h1>
        <hr />
      </div>
      <div className="contactSection">
        <div className="contactLeft">
          <h1>Let's Talk</h1>
          <div className="contactDetails">
            <div className="contactDetail">
              <MdEmail />
              <p>tejasrshinde2000@gmail.com</p>
            </div>
            <div className="contactDetail">
              <FaLocationDot />
              <p>Hadapsar Pune</p>
            </div>
            <div className="contactDetail">
              <FaGithub />
              <a href="https://github.com/Tejasshinde-123">Visit My GitHub</a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contactRight'>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Enter Your Email' name='email' />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message'></textarea>
          <button className="submitContact" type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
