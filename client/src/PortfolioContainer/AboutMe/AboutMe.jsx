
import "./AboutMe.css"
import Work from "./Work/Work"
import Education from "./Education/Education"
import { useState } from "react";



const AboutMe = () => {

  const [flag, setFlag] = useState("work");

const handleAbout = (e) => {
  const id = e.target.id;
  document.querySelector(".about-active").classList.remove("about-active");

  setFlag(id);
  e.target.classList.add(`about-active`);
};

  return (
    <>
      <center id="About" >ABOUT ME</center>
      <div className='about-sections' >
        <button className='about-work about-active' onClick={handleAbout} id="work"> WORK</button>
        <h1>|</h1>
        <button className='about-education' onClick={handleAbout} id="education">EDUCATION</button>
      </div>
      {flag === "work" ? <Work /> : <Education />}
      
      

    </>
  )
}

export default AboutMe
