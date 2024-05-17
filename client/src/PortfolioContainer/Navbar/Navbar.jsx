
import "./Navbar.css"
import { Link } from "react-router-dom"
import { useState } from "react";


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const handleNavigation = (section) => {
    setActiveSection(section);

    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='navbar-container'>
      <div className='navbar-name'>
        <h2>Md Asif Reza</h2>
      </div>
      <div className='navbar-links'>
        <li className={activeSection === 'Home' ? 'active' : ''}onClick={() => handleNavigation('Home')}>
          <a className="nav-link Home" aria-current="page"  >Home</a>
        </li>
        <li className={activeSection === 'About' ? 'active' : ''}onClick={() => handleNavigation('About')}>
          <a className="nav-link About" >About</a>
        </li>
        <li className={activeSection === 'Skills' ? 'active' : ''}onClick={() => handleNavigation('Skills')}>
          <a className="nav-link Skill" >Skills</a>
        </li>
        <li className={activeSection === 'Contact' ? 'active' : ''}onClick={() => handleNavigation('Contact')}>
          <a className="nav-link Contact" >Contact</a>
        </li>
      </div>
    </div>
  )
}

export default Navbar
