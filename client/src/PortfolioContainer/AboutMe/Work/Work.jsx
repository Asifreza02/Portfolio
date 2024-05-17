import React from 'react'
import { FaGithub } from "react-icons/fa";
import "./Work.css"

const Work = () => {
  return (
    <>
      <div className='about-container'>
        <div className='Work'>
          <div className="about-card-container px-5 py-4" id="custom-cards">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-2">
              <div className="col">
                <div className="card1 card ">
                <div class="overlayer">
                        <h4>Amazon Clone</h4>
                       <p> This is a clone website of Amazon.com, build by using HTMl CSS and Javascript.
                       </p>
                   </div> 
                </div>
              </div>
            </div>
            <div className='about-content'>
              <div className='about-content-container'>

                <div className='about-content-title'>
                  <center >Frontend Developer</center>
                </div>
                <div className='about-content-text'>
                  <p>
                    I have about 2 years experienced in building frontend web-application. Till now I have built 20+ project in frontend.
                  </p>
                </div>
                <div about-content-links>
                  <a href="https://github.com/Asifreza02/"><FaGithub /></a>
                  <a href="">link</a>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card-container px-5 py-4" id="custom-cards">
            <div className='about-content'>
              <div className='about-content-container'>

                <div className='about-content-title'>
                  <center>Full Stack Developer</center>
                </div>
                <div className='about-content-text'>
                  <p>
                    I have about 1 year of experienced of creating full stack applications. More than 10+ full stack project I have worked in till now.
                     
                  </p>
                </div>
                <div about-content-links>
                  <a href="https://github.com/Asifreza02/"><FaGithub /> </a>
                  <a href="">link</a>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-2">
              <div className="col">
                <div  className="card card2">  
                <div class="overlayer">
                        <h4>Pi-Learn</h4>
                       <p> 
                          It is full stack project build by using React, CSS, Bootstrap, Node, express and MongoDB. In this web-app different users can post, like posts, cooment, follow people, see profile and many more.
                       </p>
                   </div>                 
                </div>
              </div>
            </div>

          </div>
          <div className="about-card-container px-5 py-4" id="custom-cards">
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-2">
              <div className="col">
                <div  className="card card3">
                <div class="overlayer">
                        <h4>TIC-TAC-TOE</h4>
                       <p> 
                          It is a fun game where 2 persons can play togather and the result will be displayed. I build this by using HTML CSS and Javascript.
                       </p>
                   </div> 
                </div>
              </div>
            </div>
            <div className='about-content'>
              <div className='about-content-container'>

                <div className='about-content-title'>
                  <center>Extra Project</center>
                </div>
                <div className='about-content-text'>
                  <p>
                    I have huge intrest in building and desinging fun project, where people can enjoy and can spend time with friends or family.
                  </p>
                </div>
                <div about-content-links>
                  <a href="https://github.com/Asifreza02/"><FaGithub /></a>
                  <a href="">link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
