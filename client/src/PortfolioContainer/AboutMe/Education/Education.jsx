import React from 'react'
import "./Education.css"
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Education = () => {
  let toggle = true;
  const handleClick = (e)=>{
    const name =(e.target.name);
    let targetElem = document.querySelector(`.${name}`);
    if(toggle){
      targetElem.classList.remove("hidden");
      e.target.innerHTML = "-";
      toggle= false;
    }
    else{
      targetElem.classList.add("hidden");
      e.target.innerHTML = "+";
      toggle = true;
    }  
  }
  return (
    <div className='education-container'>
      <div className='education-content'>
        <div className='education-left'>
          <h1 className='education-left-name'>Md Asif Reza</h1>
          <div className='educations-address'>
          <p>Phone: 7584033359</p>
          <p>Email: asiftheog@gmail.com</p>
          <p>DOB: 25/06/2003</p>
          <p>Blood-Group: B+</p>
          <p>Address: Gendabri, Uttar Dinajpur, West Bengal (733210)</p>
          </div>
          <div className='education-qr'>
          </div>
          <div className='education-links'>
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
        </div>
        <div className='education-right'>
          <div className='education-right-content'>
            <span>University Education</span>
            <button name='first' onClick={handleClick}>+</button>
            <p className='first hidden'>Pursuing BTech in Computer Science Engineering from JIS University, Kolkata and accomplished the average CGPA is 8.56 after 3 semester</p>
          </div>
          <div className='education-right-content'>
            <span>Higher Secondary Education</span>
            <button name='second' onClick={handleClick}>+</button>
            <p className='second hidden'>I demonstrated my 12th in PCMB from Islampur State Farm Colony High (WBCHSE Board) School with 80.8% marks</p>
          </div>
          <div className='education-right-content'>
            <span>Secondary Education</span>
            <button name='third' onClick={handleClick}>+</button>
            <p className='third hidden'>My secondary education completed from Dharampur High School (WBBSE Board) with 83.71% marks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
