import React, { useState } from 'react'
import "./Skills.css"

const Skills = () => {
  const [skill, setSkill] = useState("Development");
  const handleSkill = (e)=>{
    const ID = e.target.id;
    let activatedElem = document.querySelector(".activated")
    activatedElem.classList.remove("activated")
    if(ID === "Development") {
      setSkill("Development")
      e.target.classList.add("activated")
    } 
    else if (ID === "Programming"){
      setSkill("Programming")
      e.target.classList.add("activated")
    }
    else{
      setSkill("Other")
      e.target.classList.add("activated")
    }
    
  }
  return (
    <>
      <div className='skills-container' id='Skills'>
        <h1>SKILLS</h1>
        <div className="skills-content">
          <div className="skills-left">
            <div className="skills-left-contenet">
              <div className="skills-left-toggle activated" id='Development' onClick={handleSkill}>
                Development
              </div>
              <div className="skills-left-toggle" id='Programming' onClick={handleSkill}>
                Programming
              </div>
              <div className="skills-left-toggle" id='Other' onClick={handleSkill}>
               Other
              </div>
            </div>
          </div>
          {(() => {
        if (skill === "Development") {
          return <> 
          <div className="skills-right">
              <div className="skills-right-elem">
                HTML
              </div>
              <div className="skills-right-elem">
                CSS
              </div>
              <div className="skills-right-elem">
                JAVASCRIPT
              </div>
              <div className="skills-right-elem">
                REACT JS
              </div>
              <div className="skills-right-elem">
                NODE JS
              </div>
              <div className="skills-right-elem">
                EXPRESS JS
              </div>
              <div className="skills-right-elem">
                MONGO-DB
              </div>
              <div className="skills-right-elem">
                TAILWIND 
              </div>
              <div className="skills-right-elem">
                BOOTSTRAP
              </div>
          </div>;
          </> 
        } else if (skill === "Programming"){
          return <> 
          <div className="skills-right">
              <div className="skills-right-elem">
                C 
              </div>
              <div className="skills-right-elem">
                C++
              </div>
              <div className="skills-right-elem">
                DSA
              </div>
              <div className="skills-right-elem">
                OOPS
              </div>
              <div className="skills-right-elem">
                PYTHON
              </div>
          </div>;
          </> 
        }
         else {
          return <> 
          <div className="skills-right">
              <div className="skills-right-elem">
                DBMS
              </div>
              <div className="skills-right-elem">
                OS
              </div>
              <div className="skills-right-elem">
                MS Office
              </div>
              <div className="skills-right-elem">
                DEBUGGING
              </div>
              <div className="skills-right-elem">
                LEADERSHIP
              </div>
              <div className="skills-right-elem">
                MANAGEMENT
              </div>
          </div>;
          </> 
        }
      })()}
        
        </div>
      </div>
    </>
  )
}

export default Skills
