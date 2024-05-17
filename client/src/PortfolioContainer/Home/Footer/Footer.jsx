import React from 'react'
import "./Footer.css"
import LogoImg from '../../../assets/Home/shape-bg.png'

const Footer = () => {
  return (
    <div  className='footer-container'>
      <div className='footer-parent'>
      <img src={LogoImg}/>
      </div>
    </div>
  )
}

export default Footer
