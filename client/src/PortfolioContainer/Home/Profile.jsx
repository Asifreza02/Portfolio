import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Typical from 'react-typical';
import "./Profile.css"


const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <a href="https://www.linkedin.com/in/asif-reza-599571259/">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/asifreza02/">
              <FaSquareInstagram />
            </a>
            <a href="https://github.com/Asifreza02/">
             <FaGithub />
            </a>
            <a href="#">
             <FaXTwitter />
            </a>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text '>
              {" "}
              Hello, I'M <span className='highlighted-text'> Asif</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text '>
              {" "}
              <h1>
                {" "}
                <Typical
                  steps={['Enthusiastic dev 😎', 2000, 'Web Developer 💻', 2000,  'MERN Developer 🧑‍💻', 2000,  'Full Stack Developer 🔛', 2000]}
                  loop={Infinity}
                />
              </h1>
            </span>
            <div className='profile-role-tagline'>
                Knack of building website with front and back end operation.
            </div>
            <div className='profile-options'>
            <button type="button" className="btn primary-btn">Hire me</button>
            <a className='resume-btn' href="resume.pdf" download="resume.pdf">
            <button type="button" className="btn highlighted-btn" >Get Resume</button>
            </a>
            </div>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-bg'></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
