import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-container' id='Contact'>
      <div className="contact-title">
        <p>get in touch</p>
        <center>CONTACT ME</center>
      </div>
      <div className="contact-content">
        <div className='contact-info'>

        </div>
        <div className="contact-form">
          <form action="/" method="post">
            <input className='p-3' type="text" placeholder='Your Full Name :' id='Name' />
            <input className='p-3' type="email" placeholder='Your Email' />
            <textarea className='p-3' name="message" id="" rows={6} placeholder='Your message'></textarea>
            <button className='form-btn' type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-footer">
        <p>Developed by</p>
        <h3>Md Asif Reza</h3>
      </div>
    </div>
  )
}

export default Contact
