import React from 'react';
import { Link } from 'react-router-dom';



import './Contact.css'

function Contact() {
  return (
      <section className="Contact-section" id="Contact">

        <div className="Contact-left-text">
          <div className="Contact-title">Contact<span className="grey"> us </span></div>
        </div>
          <div className="Contacts">
              <h1 class="contact-type">Email</h1>
              <a href='mailto:info@yourdomain.com' className='contact-link'>
                  contact@liebenlogistics.co.uk
              </a>
              <h1 className="contact-type">Tel</h1>
              <a href='mailto:info@yourdomain.com' className='contact-link'>
                  +447526226401
              </a>
              <h1 className="contact-type">Address</h1>
              <a href='mailto:info@yourdomain.com' className='contact-link'>
                  <p>Brynmill</p>
                  <p>Swansea</p>
              </a>

          </div>
      </section>
  );
}

export default Contact;
